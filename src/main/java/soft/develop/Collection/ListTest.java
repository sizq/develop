package soft.develop.Collection;

import java.util.ArrayList;
import java.util.List;

public class ListTest {
	public static void main(String[] args) {
		List<String> list  = new ArrayList<String>();
		list.add("1");
		list.add("10");
		list.add("5");
		list.add("55");
		list.add("2");
		list.add("23");
		System.out.println(list);
		list.remove("123");
		System.out.println(list);
	}

}
