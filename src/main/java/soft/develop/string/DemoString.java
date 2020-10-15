package soft.develop.string;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.annotations.JsonAdapter;

/**
 * 
 * @CopyRight www.theSCM.com.cn
 * @Describe 
 * @Link soft.develop.string.DemoString.java
 * @Author sizq
 * @Date 2020年3月20日 上午9:21:30
 */
public class DemoString {
	public static void main(String[] args) {
//		
//		String str = "珠海富润";
//		System.out.println("调用方法执行前："+str);
//		initString(str);
//		System.out.println("调用方法执行后："+str);
//		
//		System.out.println("=================================================");
//		
//		StringBuilder strb = new StringBuilder("珠海富润");
//		System.out.println("调用方法执行前："+strb.toString());
//		initStrBu(strb);
//		System.out.println("调用方法执行后："+strb.toString());
		
		
		
		Map<String,Object> aa = new HashMap<>();
		aa.put("", "aa");
		aa.put(null, "bb");
		aa.put(" ", "cc");
		System.out.println(aa.toString());
		
	}
	
	
	
	public static void initString(String str){
		str+="跨境ERP";
		System.out.println("调用方法执行时："+str);
	}
	
	public static void initStrBu(StringBuilder strb){
		strb.append("跨境ERP");
		System.out.println("调用方法执行时："+strb.toString());
		
	}

}
