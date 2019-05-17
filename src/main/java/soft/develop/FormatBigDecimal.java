package soft.develop;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public class FormatBigDecimal {
	public static void main(String[] args) {
		//formatBigdecimal();
		double number = 0.000000;
		BigDecimal bd=new BigDecimal(number);
		boolean compare = compare(bd,BigDecimal.ZERO);
		System.out.println(compare);
	}
	
	
	/**
	 * 格式化BigDecimal
	 */
	public static void formatBigdecimal() {
		double number = 0.12549801;
        DecimalFormat df = new DecimalFormat("0.0000");
        BigDecimal bd=new BigDecimal(number);
        BigDecimal setScale = bd.setScale(4,BigDecimal.ROUND_HALF_UP);
        
        System.out.println("1.使用java.text.DecimalFormat:" +df.format(number));
        System.out.println("2.使用String.format:" +String.format("%.2f",number));
        System.out.println("3.使用java.math.BigDecimal:" +bd.setScale(4,BigDecimal.ROUND_HALF_UP).doubleValue());
	}
	/**
	 * 判断两个BigDecimal的值是否相等
	 * 例：0.0000 和 0 是相等的
	 * @param b1
	 * @param b2
	 * @return
	 */
	public static boolean compare(BigDecimal b1,BigDecimal b2){
		if (b1!=null&&b2!=null) {
			if (b1.compareTo(b2)==0) {
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

}
