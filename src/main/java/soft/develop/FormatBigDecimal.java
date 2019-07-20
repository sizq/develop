package soft.develop;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class FormatBigDecimal {
	public static void main(String[] args) {
//		//formatBigdecimal();
//		double number = 0.000000;
		BigDecimal feeVolume = new BigDecimal("10");
		BigDecimal volumeModulus = new BigDecimal("2");
		BigDecimal feeWeight = new BigDecimal("20");
		BigDecimal volumeTotal = new BigDecimal("30");
//		boolean compare = compare(bd,BigDecimal.ZERO);
//		System.out.println(compare);
//		System.out.println(bd);
		BigDecimal vw = feeVolume.multiply(new BigDecimal(100*100*100)).divide(volumeModulus, 3, RoundingMode.HALF_UP);
		String shareType = "weight";
		if(feeWeight.compareTo(vw) < 0){
			shareType = "volume";
		}
		volumeTotal = volumeTotal.divide(new BigDecimal(100*100*100), 6, RoundingMode.HALF_UP);
		
		/**
		 * BigDecimal除法出现无限循环的结果时，会抛ArithmeticException异常
		 * throw new ArithmeticException("Non-terminating decimal expansion;no exact representable decimal result.");
		 * 解决方法：feeVolume.divide(volumeModulus,2);第二个参数：需要保留的小数位
		 */
		BigDecimal subtract = feeVolume.divide(volumeModulus,2);
		/**
		 * BigDecimal乘法保留指定小数位
		 * 乘完以后调用.setScale(2,BigDecimal.ROUND_HALF_UP)
		 * 第一个参数：需要保留的小数位
		 * 第二个参数：保留小数位的方式(四舍五入、向上取舍、向下取舍.....)
		 */
		BigDecimal multiply = feeVolume.multiply(volumeModulus).setScale(2,BigDecimal.ROUND_HALF_UP);
//		System.out.println(subtract);
//		System.out.println(multiply);
		BigDecimal a = volumeModulus.subtract(feeVolume);
		if (a.compareTo(BigDecimal.ZERO)<0) {
			System.out.println(a);
			System.out.println(a.abs());
		}
		
		
		
		
		
		
		
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public void testMapSort(List<Map<String, Object>> mapList){
//		List<Map<String, Object>> mapList = initMap();
//		System.out.println(mapList);
		Collections.sort(mapList, new Comparator(){
			@Override
			public int compare(Object o1, Object o2) {
				Map<String,Object> map1 = (Map<String,Object>)o1;
				Map<String,Object> map2 = (Map<String,Object>)o2;
				BigDecimal qty1 = StringUtils.toBigDecimal(map1.get("qty"),BigDecimal.ZERO);
				BigDecimal qty2 = StringUtils.toBigDecimal(map2.get("qty"),BigDecimal.ZERO);
				if (qty1.compareTo(qty2)>0) {
					return -1;
				}else if(qty1.compareTo(qty2)==0){
					return 0;
				}else{
					return 1;
				}
			}	    	
		});
//		System.out.println(mapList);
	}
	
	
	
	public List<Map<String, Object>> initMap(){
		List<Map<String, Object>> mapList = new ArrayList<>();
		 for (int i = 0; i < 10; i++) {
			 Map<String, Object> map = new HashMap<>();
			 map.put("qty", i*5);
			 mapList.add(map);
		}
		return mapList;
	}
}
