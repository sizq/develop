package com.thescm.frdas.ecs.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.sql.*;
import java.util.Collection;
import java.util.Properties;
import java.util.concurrent.ConcurrentHashMap;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;
import com.alibaba.druid.pool.DruidPooledConnection;
import com.thescm.commons.db.IDynamicConnection;
import com.thescm.commons.db.PoolConnection;
import com.thescm.commons.utils.DateUtils;
import com.thescm.commons.utils.StringUtils;
import com.thescm.commons.utils.SysConstants;
import com.thescm.frdas.ecs.cache.EcsCompCache;
import com.thescm.frdas.ecs.cache.EcsCompRdsCache;
import com.thescm.frdas.ecs.cache.EcsCoreRdsCache;
import com.thescm.frdas.ecs.domain.core.EcsComp;
import com.thescm.frdas.ecs.domain.core.EcsCompRds;
import com.thescm.frdas.ecs.domain.core.EcsCoreRds;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 获取从数据库连接
 */
public class MySQLConnections implements IDynamicConnection {
    private static final Logger logger = LoggerFactory.getLogger(MySQLConnections.class);

    //TODO 这里以后考虑放弃DRDS数据库。
    //全局从连接
    private static volatile ConcurrentHashMap<Long,String> cache = new  ConcurrentHashMap<>();
    //DRDS所对应RDS分库连接
    private static volatile ConcurrentHashMap<Long, DruidDataSource> slaveDataSourceList = new ConcurrentHashMap<>();
    //RDS分库的的只读从库连接
    private static volatile ConcurrentHashMap<Long, DruidDataSource> slaveReadOnlyDataSourceList = new ConcurrentHashMap<>();

    //账套连接
    private static volatile ConcurrentHashMap<Long,String> compCache = new ConcurrentHashMap<>();
    private static volatile ConcurrentHashMap<Long, DruidDataSource> compDataSourceList = new ConcurrentHashMap<>();
    private static volatile ConcurrentHashMap<Long, DruidDataSource> compSlaveDataSourceList = new ConcurrentHashMap<>();


    //TODO 这里以后考虑放弃DRDS数据库。
    //polardb
    private static boolean isPolarDB = true;
   
    public static void start() {
        PoolConnection.setDynamicConnectionImpl(new MySQLConnections());
    }

    /**
     * 关闭连接
     */
    public static void stop(){
        if (slaveDataSourceList != null && slaveDataSourceList.size() > 0) {
            Collection<DruidDataSource> rs = slaveDataSourceList.values();
            for (DruidDataSource r : rs) {
                if (r != null) {
                    r.close();
                }
            }
            slaveDataSourceList.clear();
        }

        if (slaveReadOnlyDataSourceList != null && slaveReadOnlyDataSourceList.size() > 0) {
            Collection<DruidDataSource> rs = slaveReadOnlyDataSourceList.values();
            for (DruidDataSource r : rs) {
                if (r != null) {
                    r.close();
                }
            }
            slaveReadOnlyDataSourceList.clear();
        }

        if (compDataSourceList != null && compDataSourceList.size() > 0) {
            Collection<DruidDataSource> rs = compDataSourceList.values();
            for (DruidDataSource r : rs) {
                if (r != null) {
                    r.close();
                }
            }
            compDataSourceList.clear();
        }
    }

    /**
     * 根据账套ID获取从数据库连接
     * @param compId
     * @return
     * @throws SQLException
     */
    @Override
    public DruidPooledConnection getCompConnection(Long compId) throws SQLException {
        DruidPooledConnection connection = null;
        if (StringUtils.isEmpty(compId)) {
            return connection;
        }

        EcsComp comp = EcsCompCache.getComp(compId);
        if (comp == null) {
            return connection;
        }

        //如果是独立DB
        if (comp.getSingleDb() != null && comp.getSingleDb()) {

            if (!compDataSourceList.containsKey(compId)) {
                getCompConnectionForGlobal(compId);
            }

            DruidDataSource dds = compDataSourceList.get(compId);
            if (dds != null) {
                connection = dds.getConnection();
            }
            //取独立DB的连接
            return connection;
        }

        if (isPolarDB) {
            //TODO 这里以后考虑放弃DRDS数据库，直接取共享独立分库。（PolarDB）

            //如果有只读库优先取只读库，否则取直接分库。这里目的是为了后期取消息DRDS。
            //针对全局客户：这里是取DRDS后面的直挂的RDS库。8个分库，对8取模。
            // 注意目前这里是对8取模，后期扩容简单。
            // 1.(comp_id<480) => comp_id %8（0~7库）,
            // 2.(comp_id >=480) => (comp_id - 480) % 16  + 8，增加 16个库。8~23库
            Long id = compId % 8;
            if (compId < 480) {
                id = compId % 8;
            } else if (compId >= 480) {
                id = (compId - 480) % 16 + 8;
            }
            if (!slaveDataSourceList.containsKey(id)) {
                getSlaveConnectionForGlobal(id);
            }
            DruidDataSource dds = slaveDataSourceList.get(id);
            if (dds != null) {
                connection = dds.getConnection();
            } else {
                throw new SQLException("ID:" + id + "不存在!");
            }
            return connection;
        } else {
            return PoolConnection.getGlobalConnection();
        }
    }

    /**
     * 根据账套ID获取从数据库分库连接
     * 1.针对独立分库的客户，如果存在只读库，就优先取只读库，否则在当前库连接
     * 2.针对共享客户，优先取RDS分库。也就是DRDS后的直挂RDS库存。
     * @param compId
     * @return
     * @throws SQLException
     */
    @Override
    public DruidPooledConnection getSlaveConnection(Long compId) throws SQLException {
        DruidPooledConnection connection = null;
        if (StringUtils.isEmpty(compId)) {
            return connection;
        }

        EcsComp comp = EcsCompCache.getComp(compId);
        if (comp == null) {
            return connection;
        }
        //取只读连接,如果是独立DB的客户
        if (comp.getSingleDb() != null && comp.getSingleDb()) {
            if (!compSlaveDataSourceList.containsKey(compId)) {
                getCompConnectionForGlobal(compId);
            }
            DruidDataSource dds = compSlaveDataSourceList.get(compId);
            if (dds != null) {
                connection = dds.getConnection();
            }
            //取独立DB的连接
            return connection;
        }

        Long id = compId % 8;
        if(isPolarDB) {
            //如果有只读库优先取只读库，否则取直接分库。这里目的是为了后期取消息DRDS。
            //针对全局客户：这里是取DRDS后面的直挂的RDS库。8个分库，对8取模。
            // 注意目前这里是对8取模，后期可以扩容。
            // 1.(comp_id<480) => comp_id %8（0~7库）,
            // 2.(comp_id >=480) => (comp_id - 480) % 16  + 8，增加 16个库。8~23库

            if (compId < 480) {
                id = compId % 8;
            } else if (compId >= 480) {
                id = (compId - 480) % 16 + 8;
            }
        }

        if (!slaveReadOnlyDataSourceList.containsKey(id)) {
            getSlaveConnectionForGlobal(id);
        }

        //针对全局客户：优先取RDS分库。
        if(slaveReadOnlyDataSourceList.containsKey(id)) {
            DruidDataSource dds = slaveReadOnlyDataSourceList.get(id);
            if (dds != null) {
                return dds.getConnection();
            }
        }
        return connection;
    }

    /**
     * 从主数据库中获取账套连接和分库信息
     *
     */
    private static synchronized void getSlaveConnectionForGlobal(Long id) {
        if (id != null && id >= 0 && !slaveDataSourceList.containsKey(id)) {
            EcsCoreRds rds = EcsCoreRdsCache.getRdsInstance(id);
            boolean isReadOnlySlave = false;
            if (rds != null) {
                cache.put(id, DateUtils.getDate(rds.getModified(), "yyyy-MM-dd HH:mm:ss"));
                writeTxtFile("druid-rds-slave-" + id + ".properties", rds.getConnString(),false);
                if (!StringUtils.isEmpty(rds.getConnStringSlave())) {
                    writeTxtFile("druid-rds-slave-readonly-" + id + ".properties", rds.getConnStringSlave(),false);
                    isReadOnlySlave = true;
                }
            }

            String filepath1 = getConnFilePath("druid-rds-slave-" + id + ".properties");
            Properties properties1 = loadPropertyFile(filepath1);
            if (properties1 != null) {

                try {
                    DruidDataSource dbs = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties1);
                    slaveDataSourceList.put(id, dbs);
                    //如果没有只读从库 就取自已
                    if (!isReadOnlySlave) {
                        slaveReadOnlyDataSourceList.put(id, dbs);
                        return;
                    }
                } catch (Exception e) {
                    logger.error(e.getMessage(),e);
                }
            }

            String filepath2 = getConnFilePath("druid-rds-slave-readonly-" + id + ".properties");
            Properties properties2 = loadPropertyFile(filepath2);
            if (properties2 != null) {
                try {
                    DruidDataSource dbs = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties2);
                    slaveReadOnlyDataSourceList.put(id, dbs);
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }
    }

    /**
     * 从主数据库中获取账套连接信息
     *
     */
    private static synchronized void getCompConnectionForGlobal(Long compId) {
        if (compId != null && compId >= 0 && !compDataSourceList.containsKey(compId)) {
            EcsCompRds rds = EcsCompRdsCache.getRdsInstance(compId);
            boolean isSlave = false;
            if (rds != null) {
                compCache.put(compId, DateUtils.getDate(rds.getModified(), "yyyy-MM-dd HH:mm:ss"));
                writeTxtFile("druid-comp-" + compId + ".properties", rds.getConnString(),true);
                if (!StringUtils.isEmpty(rds.getConnStringSlave())) {
                    writeTxtFile("druid-comp-" + compId + ".slave.properties", rds.getConnStringSlave(),true);
                    isSlave = true;
                }
            }

            String filepath1 = getConnFilePath( "druid-comp-" + compId + ".properties");
            Properties properties1 = loadPropertyFile(filepath1);
            if (properties1 != null) {
                try {
                    DruidDataSource dbs = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties1);
                    compDataSourceList.put(compId, dbs);

                    //如果没有从连接就是自已
                    if (!isSlave) {
                        compSlaveDataSourceList.put(compId, dbs);
                        return;
                    }
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }

            String filepath2 = getConnFilePath( "druid-comp-" + compId + ".slave.properties");
            Properties properties2 = loadPropertyFile(filepath2);
            if (properties2 != null) {
                try {
                    DruidDataSource dbs = (DruidDataSource) DruidDataSourceFactory.createDataSource(properties2);
                    compSlaveDataSourceList.put(compId, dbs);
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }
    }


    private static String getConnFilePath(String fileName) {
        String path = SysConstants.APP_ROOT_PATH +
                File.separator + "conf" +
                File.separator + "dbconfig-slave";
        if (!StringUtils.isEmpty(fileName)) {
            path += File.separator + fileName;
        }
        return path;
    }

    public static Properties loadPropertyFile(String fullFile) {

        if (null == fullFile || fullFile.equals("")) {
            throw new IllegalArgumentException("Properties file path can not be null : " + fullFile);
        }
        InputStream inputStream = null;
        Properties p = null;
        try {
            inputStream = new FileInputStream(fullFile);
            p = new Properties();
            p.load(inputStream);
        } catch (FileNotFoundException e) {
            throw new IllegalArgumentException("Properties file not found: " + fullFile);
        } catch (IOException e) {
            throw new IllegalArgumentException("Properties file can not be loading: " + fullFile);
        } finally {
            try {
                if (inputStream != null) {
                    inputStream.close();
                }
            } catch (IOException e) {

            }
        }
        return p;
    }

    private static void writeTxtFile(String fileName, String content,boolean isSingle) {
        //处理内网地址问题
        if("released".equals(SysConstants.runMode)) {
        	if(isSingle){
        		content = content.replaceFirst ("jdbc:mysql://.+:3306", "jdbc:mysql://localhost:3307");
        	}else{
        		content = content.replaceFirst ("jdbc:mysql://.+:3306", "jdbc:mysql://localhost:3306");
        	}
        }

        // 先读取原有文件内容，然后进行写入操作
        PrintWriter mm = null;
        try {
            // 写入文件
            String path = getConnFilePath("");
            File tmp = new File(path);
            if (!tmp.exists()) {
                tmp.mkdirs();
            }
            File file = new File(path + File.separator + fileName);
            if (!file.exists()) {
                file.createNewFile();
            }

            mm = new PrintWriter(new FileOutputStream(file), true);
            mm.write(content);
            mm.flush();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        } finally {
            if (mm != null) {
                mm.close();
            }
        }

    }
}
