package soft.develop;

import java.math.BigDecimal;

public class Test {
	public static void main(String[] args) {
		String a = "123.123";
//		boolean numeric = isNumeric(a);
		boolean number = getNumber(a);
		
		System.out.println(number);
		
	}
	public static boolean isNumeric(String str) {  
        if (str == null) {  
            return false;  
        }  
        int sz = str.length();  
        for (int i = 0; i < sz; i++) {  
            if (Character.isDigit(str.charAt(i)) == false) {  
                return false;  
            }  
        }  
        return true;  
    } 
	
	
	
	
	public static boolean getNumber(String str){
		try {
			BigDecimal bigDecimal = new BigDecimal(str);
			return true;
		} catch (Exception e) {
			return false;
		}
		
	}

}
