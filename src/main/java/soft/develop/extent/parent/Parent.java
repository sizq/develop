package soft.develop.extent.parent;

import java.util.HashMap;
import java.util.Map;

import soft.develop.extent.parentparent.ParentParent;

/**
 * 
 * @CopyRight www.theSCM.com.cn
 * @Describe 
 * @Link soft.develop.extent.parent.Parent.java
 * @Author sizq
 * @Date 2020年4月8日 下午2:30:20
 */
public abstract class Parent extends ParentParent{
	 public abstract Map<String,Object> execute(Map<String,Object> param) throws Exception;
	 @Override
    public Map<String,Object> execute(String param) throws Exception {
		 Map<String,Object> data = new HashMap<>();
		 data.put("data", param);
		 System.out.println("执行Parent中execute方法！");
    	return this.execute(data);
    	
    }

}
