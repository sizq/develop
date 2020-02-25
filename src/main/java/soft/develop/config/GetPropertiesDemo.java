package soft.develop.config;

import java.util.Properties;

import org.apache.dubbo.common.utils.ConfigUtils;

public class GetPropertiesDemo {
	private static volatile Properties PROPERTIES;
	
	public static Properties getProperties() {
        if (PROPERTIES == null) {
            synchronized (GetPropertiesDemo.class) {
                if (PROPERTIES == null) {
                    PROPERTIES = ConfigUtils.loadProperties("config/serviceConfig.properties", false, true);
                }
            }
        }
        return PROPERTIES;
    }
	 /**
     * 获取属性文件中Key
     * 
     * @param key
     * @return
     */
    public static String getProperty(String key) {
        Properties properties = getProperties();
        return properties.getProperty(key);
    }
    
    public static void main(String[] args) {
    	String appsecret = GetPropertiesDemo.getProperty("DEFAULT.KEY");
    	String appkey = GetPropertiesDemo.getProperty("DEFAULT.SECRET");
    	System.out.println(appsecret);
    	System.out.println(appkey);
	}

}
