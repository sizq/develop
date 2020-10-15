package soft.develop.extent.chinld;

import java.util.Map;

import soft.develop.extent.parent.Parent;

/**
 * 
 * @CopyRight www.theSCM.com.cn
 * @Describe 
 * @Link soft.develop.extent.chinld.Sun.java
 * @Author sizq
 * @Date 2020年4月8日 下午2:30:11
 */
public class Sun extends Parent{

	@Override
	public Map<String, Object> execute(Map<String, Object> param) throws Exception {
		System.out.println(param.get("data"));
		return null;
	}

}
