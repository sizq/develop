package soft.develop;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringTest {
	public static void main(String[] args) {
		// String a = "fkjash+,)fkhaslgh";
		// String s = "+";
		// String[] split = a.split("\\)");
		// for (String string : split) {
		// System.out.println(string);
		// }

		// Object o1 = true;
		// String s1 = "true";
		// if (s1.equals(o1)) {
		// System.out.println("111");
		// }else{
		// System.out.println("222");
		// }
//		String s = "989";
//		boolean a = isNumeric2(s);
//		System.out.println(a);
		// org.apache.commons.lang.StringUtils;
		// StringUtils.isNumeric("aaa123456789");
		
		boolean b = areNotEmpty("1","eqw","45fsdfa","213","1",null);
		System.out.println(b);
		
		

	}

	/**
	 * 转义字符串中的特殊字符
	 * 
	 * @param keyword
	 *            需要转义的字符串
	 * @return 转义后的字符串
	 */
	public static String escapeExprSpecialWord(String keyword) {
		if (keyword != null && keyword.trim() != "") {
			String[] fbsArr = { "\\", "$", "(", ")", "*", "+", ".", "[", "]", "?", "^", "{", "}", "|" };
			for (String key : fbsArr) {
				if (keyword.contains(key)) {
					keyword = keyword.replace(key, "\\" + key);
				}
			}
		}
		return keyword;
	}

	/**
	 * 1、判断字符串是否为纯数字 
	 * @param str
	 * @return String s1 = "989"; true String s2 = "989.99"; false
	 */
	public static boolean isNumeric1(String str) {
		Pattern pattern = Pattern.compile("[0-9]*");
		Matcher isNum = pattern.matcher(str);
		if (!isNum.matches()) {
			return false;
		}
		return true;
	}

	/**
	 * 2、判断字符串是否为纯数字
	 * 
	 * @param str
	 * @return String s1 = "989"; true String s2 = "989.99"; false
	 */
	public static boolean isNumeric2(String str) {
		for (int i = 0; i < str.length(); i++) {
			System.out.println(str.charAt(i));
			if (!Character.isDigit(str.charAt(i))) {
				return false;
			}
		}
		return true;
	}
	
	public static boolean areNotEmpty(String... values) {
		boolean result = true;
		if (values != null && values.length != 0) {
			String[] var2 = values;
			int var3 = values.length;

			for (int var4 = 0; var4 < var3; ++var4) {
				String value = var2[var4];
				result &= !isEmpty(value);
			}
		} else {
			result = false;
		}

		return result;
	}
	
	/**
	 * 判断字符串是否为空
	 * @param value
	 * @return 
	 */
	public static boolean isEmpty(String value) {
		int strLen;
		if (value != null && (strLen = value.length()) != 0) {
			if ("null".equals(value)) {
				return true;
			} else {
				for (int i = 0; i < strLen; ++i) {
					if (!Character.isWhitespace(value.charAt(i))) {
						return false;
					}
				}

				return true;
			}
		} else {
			return true;
		}
	}
}
