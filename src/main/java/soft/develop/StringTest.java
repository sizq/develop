package soft.develop;

import java.math.BigDecimal;


public class StringTest {
	public static void main(String[] args) {
		String a = "fkjash+,)fkhaslgh";
		String s = "+";
		String[] split = a.split("\\)");
		for (String string : split) {
			System.out.println(string);
		}
		 
	}
	/**
	 * 转义字符串中的特殊字符
	 * @param keyword 需要转义的字符串
	 * @return 转义后的字符串
	 */
	public static String escapeExprSpecialWord(String keyword) {  
   	    if (keyword!=null&&keyword.trim()!="") {  
   	        String[] fbsArr = { "\\", "$", "(", ")", "*", "+", ".", "[", "]", "?", "^", "{", "}", "|" };  
   	        for (String key : fbsArr) {  
   	            if (keyword.contains(key)) {  
   	                keyword = keyword.replace(key, "\\" + key);  
   	            }  
   	        }  
   	    }  
   	    return keyword;  
   	}

}
