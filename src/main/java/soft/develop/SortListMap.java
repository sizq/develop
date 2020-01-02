package soft.develop;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SortListMap {
	
	public static void main(String[] args) {
		List<Map> dataList = new ArrayList<>();
		Map<String,Object> map1 = new HashMap<>();
		map1.put("prdt_code", "a");
		map1.put("wh_code", "a2");
		map1.put("flag", "1");
		dataList.add(map1);
		Map<String,Object> map3 = new HashMap<>();
		map3.put("prdt_code", "b");
		map3.put("wh_code", "a1");
		map3.put("flag", "3");
		dataList.add(map3);
		Map<String,Object> map4 = new HashMap<>();
		map4.put("prdt_code", "b");
		map4.put("wh_code", "a1");
		map4.put("flag", "4");
		dataList.add(map4);
		Map<String,Object> map2 = new HashMap<>();
		map2.put("prdt_code", "a");
		map2.put("wh_code", "a1");
		map2.put("flag", "2");
		dataList.add(map2);
		
		
		System.out.println("排序前");
		for (Map map : dataList) {
			System.out.println(map.toString());
		}
		System.out.println("-----------------------------");
		System.out.println("排序后");
		sortDate(dataList);
		for (Map map : dataList) {
			System.out.println(map.toString());
		}
		
	}
	
	
	
	@SuppressWarnings("rawtypes")
	public static void sortDate(List<Map> dataList){
		Collections.sort(dataList,new Comparator<Map>() {
			@Override
			public int compare(Map m1, Map m2) {
				int flag = StringUtils.toString(m1.get("prdt_code")).compareTo(StringUtils.toString(m2.get("prdt_code")));
				if (flag == 0) {
					flag = StringUtils.toString(m1.get("wh_code")).compareTo(StringUtils.toString(m2.get("wh_code")));
				}
				return flag;
			}
		});
	}

}
