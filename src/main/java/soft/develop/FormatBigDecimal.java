package soft.develop;

import java.math.BigDecimal;
import java.text.DecimalFormat;

public class FormatBigDecimal {
	public static void main(String[] args) {
		double number = 0.12549801;
        DecimalFormat df = new DecimalFormat("0.0000");
        BigDecimal bd=new BigDecimal(number);
        BigDecimal setScale = bd.setScale(4,BigDecimal.ROUND_HALF_UP);
        
        System.out.println("1.使用java.text.DecimalFormat:" +df.format(number));
        System.out.println("2.使用String.format:" +String.format("%.2f",number));
        System.out.println("3.使用java.math.BigDecimal:" +bd.setScale(4,BigDecimal.ROUND_HALF_UP).doubleValue());
	}

}
