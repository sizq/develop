package soft.develop;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.Reader;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.lang.management.ManagementFactory;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public abstract class StringUtils {
	public static final int DEFAULT_BUFFER_SIZE = 4096;
	private static Date startTime;

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

	public static boolean isEmpty(Long value) {
		return value == null || value <= 0L;
	}

	public static boolean isNumeric(Object obj) {
		if (obj == null) {
			return false;
		} else {
			char[] chars = obj.toString().toCharArray();
			int length = chars.length;
			if (length < 1) {
				return false;
			} else {
				int i = 0;
				if (length > 1 && chars[0] == '-') {
					i = 1;
				}

				while (i < length) {
					if (!Character.isDigit(chars[i])) {
						return false;
					}

					++i;
				}

				return true;
			}
		}
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

	public static String unicodeToChinese(String unicode) {
		StringBuilder out = new StringBuilder();
		if (!isEmpty(unicode)) {
			for (int i = 0; i < unicode.length(); ++i) {
				out.append(unicode.charAt(i));
			}
		}

		return out.toString();
	}

	public static String toUnderlineStyle(String name) {
		StringBuilder newName = new StringBuilder();

		for (int i = 0; i < name.length(); ++i) {
			char c = name.charAt(i);
			if (Character.isUpperCase(c)) {
				if (i > 0) {
					newName.append("_");
				}

				newName.append(Character.toLowerCase(c));
			} else {
				newName.append(c);
			}
		}

		return newName.toString();
	}

	public static String toUpperCaseStyle(String name) {
		StringBuilder newName = new StringBuilder();

		for (int i = 0; i < name.length(); ++i) {
			char c = name.charAt(i);
			if (i > 0 && c == '_') {
				if (i < name.length() - 1) {
					++i;
					newName.append(Character.toUpperCase(name.charAt(i)));
				} else {
					newName.append(c);
				}
			} else {
				newName.append(c);
			}
		}

		return newName.toString();
	}

	public static String convertString(byte[] data, int offset, int length) {
		if (data == null) {
			return null;
		} else {
			try {
				return new String(data, offset, length, "UTF-8");
			} catch (Exception var4) {
				throw new RuntimeException(var4);
			}
		}
	}

	public static byte[] convertBytes(String data) {
		if (data == null) {
			return null;
		} else {
			try {
				return data.getBytes("UTF-8");
			} catch (Exception var2) {
				throw new RuntimeException(var2);
			}
		}
	}

	public static long convertLong(String data) {
		if (data == null) {
			return 0L;
		} else {
			try {
				return Long.parseLong(data);
			} catch (Exception var2) {
				return 0L;
			}
		}
	}

	public static int convertInt(String data) {
		if (data == null) {
			return 0;
		} else {
			try {
				return Integer.parseInt(data);
			} catch (Exception var2) {
				return 0;
			}
		}
	}

	private static boolean isRegex(String regex, String value) {
		return Pattern.compile(regex).matcher(value).find();
	}

	public static boolean isLetterNumber(String value) {
		return isRegex("^[A-Za-z0-9]+$", value);
	}

	public static String read(InputStream in) {
		InputStreamReader reader;
		try {
			reader = new InputStreamReader(in, "UTF-8");
		} catch (UnsupportedEncodingException var3) {
			throw new IllegalStateException(var3.getMessage(), var3);
		}

		return read((Reader) reader);
	}

	public static String readFromResource(String resource) throws IOException {
		InputStream in = null;

		String var3;
		try {
			in = Thread.currentThread().getContextClassLoader().getResourceAsStream(resource);
			if (in == null) {
				in = StringUtils.class.getResourceAsStream(resource);
			}

			String text;
			if (in == null) {
				text = null;
				return text;
			}

			text = read(in);
			var3 = text;
		} finally {
			if (in != null) {
				try {
					in.close();
				} catch (Exception var11) {
					;
				}
			}

		}

		return var3;
	}

	

	

	

	public static String read(Reader reader) {
		try {
			StringWriter writer = new StringWriter();
			char[] buffer = new char[4096];
			boolean var3 = false;

			int n;
			while (-1 != (n = reader.read(buffer))) {
				writer.write(buffer, 0, n);
			}

			return writer.toString();
		} catch (IOException var4) {
			throw new IllegalStateException("read error", var4);
		}
	}

	public static String read(Reader reader, int length) {
		try {
			char[] buffer = new char[length];
			int offset = 0;
			int rest = length;

			int len;
			while ((len = reader.read(buffer, offset, rest)) != -1) {
				rest -= len;
				offset += len;
				if (rest == 0) {
					break;
				}
			}

			return new String(buffer, 0, length - rest);
		} catch (IOException var6) {
			throw new IllegalStateException("read error", var6);
		}
	}

	public static String getStackTrace(Throwable ex) {
		StringWriter buf = new StringWriter();
		ex.printStackTrace(new PrintWriter(buf));
		return buf.toString();
	}

	public static final Date getStartTime() {
		if (startTime == null) {
			startTime = new Date(ManagementFactory.getRuntimeMXBean().getStartTime());
		}

		return startTime;
	}

	

	

	public static byte[] md5Bytes(String text) {
		MessageDigest msgDigest = null;

		try {
			msgDigest = MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException var3) {
			throw new IllegalStateException("System doesn't support MD5 algorithm.");
		}

		msgDigest.update(text.getBytes());
		byte[] bytes = msgDigest.digest();
		return bytes;
	}

	

	public static BigDecimal toBigDecimal(String value) {
		if (isEmpty(value)) {
			return BigDecimal.ZERO;
		} else {
			try {
				return new BigDecimal(value);
			} catch (Exception var2) {
				return BigDecimal.ZERO;
			}
		}
	}

	public static BigDecimal toBigDecimal(String value, BigDecimal defvalue) {
		if (isEmpty(value)) {
			return defvalue;
		} else {
			try {
				return new BigDecimal(value);
			} catch (Exception var3) {
				return defvalue;
			}
		}
	}

	public static BigDecimal toBigDecimal(Long value) {
		return value != null ? new BigDecimal(value) : null;
	}

	public static BigDecimal toBigDecimal(Long value, BigDecimal defvalue) {
		return value != null ? new BigDecimal(value) : defvalue;
	}

	public static BigDecimal toBigDecimal(BigDecimal value, BigDecimal defvalue) {
		return value != null ? value : defvalue;
	}

	public static BigDecimal toBigDecimal(Object value, BigDecimal defvalue) {
		if (value == null) {
			return defvalue;
		} else if (value instanceof BigDecimal) {
			return (BigDecimal) value;
		} else {
			try {
				return new BigDecimal(value.toString());
			} catch (Exception var3) {
				return defvalue;
			}
		}
	}

	public static BigDecimal toBigDecimal(Object value) {
		if (value == null) {
			return null;
		} else if (value instanceof BigDecimal) {
			return (BigDecimal) value;
		} else {
			try {
				return new BigDecimal(value.toString());
			} catch (Exception var2) {
				return null;
			}
		}
	}

	public static Long toLong(String value) {
		if (isEmpty(value)) {
			return null;
		} else {
			try {
				return new Long(value);
			} catch (Exception var2) {
				return null;
			}
		}
	}

	public static Long toLong(String value, Long defvalue) {
		if (isEmpty(value)) {
			return defvalue;
		} else {
			try {
				return new Long(value);
			} catch (Exception var3) {
				return defvalue;
			}
		}
	}

	public static String toLong(Long value, String defvalue) {
		return value != null ? value.toString() : defvalue;
	}

	public static String toLong(Long value) {
		return value != null ? value.toString() : null;
	}

	public static Long toLong(Object value) {
		if (value == null) {
			return null;
		} else if (value instanceof Long) {
			return (Long) value;
		} else {
			try {
				return new Long(value.toString());
			} catch (Exception var2) {
				return null;
			}
		}
	}

	public static Long toLong(Object value, Long defvalue) {
		if (value == null) {
			return defvalue;
		} else if (value instanceof Long) {
			return (Long) value;
		} else {
			try {
				return new Long(value.toString());
			} catch (Exception var3) {
				return defvalue;
			}
		}
	}

	public static Boolean toBoolean(Object value) {
		if (value == null) {
			return null;
		} else if (value instanceof Boolean) {
			return (Boolean) value;
		} else {
			try {
				return new Boolean(value.toString());
			} catch (Exception var2) {
				return null;
			}
		}
	}

	public static Boolean toBoolean(Object value, Boolean defvalue) {
		if (value == null) {
			return defvalue;
		} else if (value instanceof Boolean) {
			return (Boolean) value;
		} else {
			try {
				return new Boolean(value.toString());
			} catch (Exception var3) {
				return defvalue;
			}
		}
	}

	

	public static Integer toInteger(Long value, Integer defvalue) {
		return value != null ? value.intValue() : defvalue;
	}

	public static Integer toInteger(Long value) {
		return value != null ? value.intValue() : null;
	}

	public static Integer toInteger(Integer value, Integer defvalue) {
		return value != null ? value : defvalue;
	}

	public static Integer toInteger(Integer value) {
		return value != null ? value : null;
	}

	public static Integer toInteger(String value, Integer defvalue) {
		return value != null && isNumeric(value) ? new Integer(value) : defvalue;
	}

	public static Integer toInteger(String value) {
		return value != null && isNumeric(value) ? new Integer(value) : null;
	}

	public static Integer toInteger(Object value) {
		return value != null && isNumeric(value) ? new Integer(value.toString()) : null;
	}

	public static Integer toInteger(Object value, Integer defvalue) {
		return value != null && isNumeric(value) ? new Integer(value.toString()) : defvalue;
	}

	public static Double toDouble(Object value) {
		return value != null && isNumeric(value) ? new Double(value.toString()) : 0.0D;
	}

	public static Double toDouble(Object value, Double defvalue) {
		return value != null && isNumeric(value) ? new Double(value.toString()) : defvalue;
	}

	public static String toArrayLong(List<Long> value) {
		String tmp = "";
		Iterator var2 = value.iterator();

		while (var2.hasNext()) {
			Long t = (Long) var2.next();
			if (t != null) {
				tmp = tmp.concat(t.toString() + ",");
			}
		}

		if (tmp.length() > 0) {
			tmp = tmp.substring(0, tmp.length() - 1);
		}

		return tmp;
	}

	public static List<Long> toArrayLong(String value) {
		if (value != null) {
			String[] tmp = value.trim().split("\\,");
			if (tmp != null && tmp.length > 0) {
				ArrayList<Long> o = new ArrayList();
				String[] var3 = tmp;
				int var4 = tmp.length;

				for (int var5 = 0; var5 < var4; ++var5) {
					String t = var3[var5];
					if (isNumeric(t.trim())) {
						o.add(new Long(t.trim()));
					}
				}

				return o;
			}
		}

		return null;
	}

	public static String toArrayInteger(List<Integer> value) {
		String tmp = "";
		Iterator var2 = value.iterator();

		while (var2.hasNext()) {
			Integer t = (Integer) var2.next();
			if (t != null) {
				tmp = tmp.concat(t.toString() + ",");
			}
		}

		if (tmp.length() > 0) {
			tmp = tmp.substring(0, tmp.length() - 1);
		}

		return tmp;
	}

	public static List<Integer> toArrayInteger(String value) {
		if (value != null) {
			String[] tmp = value.trim().split("\\,");
			if (tmp != null && tmp.length > 0) {
				ArrayList<Integer> o = new ArrayList();
				String[] var3 = tmp;
				int var4 = tmp.length;

				for (int var5 = 0; var5 < var4; ++var5) {
					String t = var3[var5];
					if (isNumeric(t.trim())) {
						o.add(new Integer(t.trim()));
					}
				}

				return o;
			}
		}

		return null;
	}

	public static List<String> toArrayString(String value) {
		return toArrayString(value, ",");
	}

	public static List<String> toArrayString(String value, String split) {
		List<String> list = new ArrayList();
		if (isEmpty(value)) {
			return list;
		} else {
			String[] tmp = value.trim().split("\\" + split);
			String[] var4 = tmp;
			int var5 = tmp.length;

			for (int var6 = 0; var6 < var5; ++var6) {
				String t = var4[var6];
				if (!isEmpty(t)) {
					list.add(t);
				}
			}

			return list;
		}
	}

	public static String toArrayString(List<String> value) {
		String tmp = "";
		Iterator var2 = value.iterator();

		while (var2.hasNext()) {
			String t = (String) var2.next();
			if (!isEmpty(t)) {
				tmp = tmp.concat("'" + t.replace("'", "").replace("\"", "").toString() + "',");
			}
		}

		if (tmp.length() > 0) {
			tmp = tmp.substring(0, tmp.length() - 1);
		}

		return tmp;
	}

	public static String toArrayString(Collection<?> value, String split) {
		String tmp = "";
		Iterator var3 = value.iterator();

		while (var3.hasNext()) {
			Object t = var3.next();
			if (t != null) {
				tmp = tmp.concat(toString(t) + split);
			}
		}

		if (tmp.length() > 0) {
			tmp = tmp.substring(0, tmp.length() - split.length());
		}

		return tmp;
	}

	

	public static String toString(Object value) {
		return value == null ? "" : value.toString().trim();
	}

	public static String toStringNotTrim(Object value) {
		return value == null ? "" : value.toString();
	}

	

	public static String join(Object... objs) {
		StringBuilder result = new StringBuilder();
		Object[] var2 = objs;
		int var3 = objs.length;

		for (int var4 = 0; var4 < var3; ++var4) {
			Object obj = var2[var4];
			result.append(obj == null ? "" : obj.toString());
		}

		return result.toString();
	}

	public static String getRandomString(int length) {
		StringBuffer buffer = new StringBuffer("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
		StringBuffer sb = new StringBuffer();
		Random r = new Random();
		int range = buffer.length();

		for (int i = 0; i < length; ++i) {
			sb.append(buffer.charAt(r.nextInt(range)));
		}

		return sb.toString();
	}

	public static String getRandomInteger(int length) {
		StringBuffer buffer = new StringBuffer("0123456789");
		StringBuffer sb = new StringBuffer();
		Random r = new Random();
		int range = buffer.length();

		for (int i = 0; i < length; ++i) {
			sb.append(buffer.charAt(r.nextInt(range)));
		}

		return sb.toString();
	}

	public static String joinWithSplit(String split, Object... arg) {
		StringBuilder sb = new StringBuilder();
		Object[] var3 = arg;
		int var4 = arg.length;

		for (int var5 = 0; var5 < var4; ++var5) {
			Object obj = var3[var5];
			String str = toString(obj);
			if (!isEmpty(str)) {
				sb.append(obj);
				sb.append(split);
			}
		}

		if (sb.length() > 0) {
			sb.setLength(sb.length() - 1);
		}

		return sb.toString();
	}

	public static String Lpad(Long value, int length) {
		if (value == null) {
			value = 0L;
		}

		String v = value + "";
		return v.length() >= length ? v : String.format("%1$0" + (length - v.length()) + "d", 0) + value;
	}

	public static boolean isWeight(String weight) {
		Pattern p = Pattern.compile("^[0-9]{1,5}(\\.[0-9]{1,3})?$");
		Matcher m = p.matcher(weight);
		return m.matches();
	}

	public static boolean isMoney(String money) {
		Pattern p = Pattern.compile("^[0-9]{1,6}(\\.[0-9]{1,2})?$");
		Matcher m = p.matcher(money);
		return m.matches();
	}

	public static boolean isMoney(String money, int point) {
		String parttern = join("^[0-9]{1,10}(\\.[0-9]{1,", point, "})?$");
		Pattern p = Pattern.compile(parttern);
		Matcher m = p.matcher(money);
		return m.matches();
	}

	public static boolean isQty(String qty) {
		Pattern p = Pattern.compile("^[0-9]{1,6}$");
		Matcher m = p.matcher(qty);
		return m.matches();
	}

	public static boolean isLength(String length) {
		Pattern p = Pattern.compile("^[0-9]{1,4}$");
		Matcher m = p.matcher(length);
		return m.matches();
	}

	public static boolean isMobileNumber(String mobiles) {
		if (mobiles.startsWith("86")) {
			mobiles = mobiles.substring(2);
		} else if (mobiles.startsWith("+86")) {
			mobiles = mobiles.substring(3);
		}

		return testRegex("^1\\d{10}$", mobiles);
	}

	public static boolean testRegex(String regex, String str) {
		if (isEmpty(str)) {
			return false;
		} else {
			Pattern p = Pattern.compile(regex);
			Matcher m = p.matcher(str);
			return m.matches();
		}
	}

	public static String urlEncode(String str) {
		try {
			return URLEncoder.encode(str, "UTF-8");
		} catch (Exception var2) {
			return str;
		}
	}

	public static String urlDecode(String str) {
		if (isEmpty(str)) {
			return "";
		} else {
			try {
				return URLDecoder.decode(str, "UTF-8");
			} catch (Exception var2) {
				return str;
			}
		}
	}

	public static String trimMark(String str) {
		if (isEmpty(str)) {
			return "";
		} else {
			if (str.startsWith("\"")) {
				str = str.substring(1, str.length());
			}

			if (str.endsWith("\"")) {
				str = str.substring(0, str.length() - 1);
			}

			return str;
		}
	}

	public static boolean equals(String s1, String s2) {
		if (s1 == s2) {
			return true;
		} else {
			return s1 != null && s2 != null ? s1.equals(s2) : false;
		}
	}

	public static String removeEmoticon(String source) {
		if (source != null && !source.trim().isEmpty()) {
			Pattern emoji = Pattern.compile("[🀀-🏿]|[🐀-🟿]|[☀-⟿]", 66);
			Matcher emojiMatcher = emoji.matcher(source);
			return emojiMatcher.find() ? emojiMatcher.replaceAll("") : source;
		} else {
			return source;
		}
	}
}