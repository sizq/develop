package soft.develop.Collection;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CollectionCopy {
	
	public static void main(String[] args) {
		
		List<Map<String,Object>> details = getOrdersDetails();
		
		Map<String, List<Map<String, Object>>> bomCache = new HashMap<>();
		
		
		
	}

	private static  List<Map<String,Object>> getOrdersDetails() {
		List<Map<String,Object>> detailList = new ArrayList<>();
		Map<String,Object> detail1 = new HashMap<>();
		detail1.put("prdt_id", "p1");
		detail1.put("wh_id", "w1");
		detailList.add(detail1);
		
		Map<String,Object> detail2 = new HashMap<>();
		detail2.put("prdt_id", "p2");
		detail2.put("wh_id", "w2");
		detailList.add(detail2);
		
		Map<String,Object> detail3 = new HashMap<>();
		detail3.put("prdt_id", "p3");
		detail3.put("wh_id", "w3");
		detailList.add(detail3);
		
		Map<String,Object> detail4 = new HashMap<>();
		detail4.put("prdt_id", "p4");
		detail4.put("wh_id", "w4");
		detailList.add(detail4);
		
		Map<String,Object> detail5 = new HashMap<>();
		detail5.put("prdt_id", "p5");
		detail5.put("wh_id", "w5");
		detailList.add(detail5);
		
		return detailList;
	}
	
	

}
