package soft.develop.Collection;

import java.util.ArrayList;
import java.util.List;

public class ListTest {
	public static void main(String[] args) {
		List<String> list  = new ArrayList<String>();
		list.add("123");
		list.add("dsfs");
		list.add("werwe");
		list.add("ggg");
		list.add("zxc");
		list.add("iii");
		System.out.println(list);
		list.remove("123");
		System.out.println(list);
	}

}
