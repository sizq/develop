package soft.develop.other;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class dateparseUtil {
	public static void main(String[] args) throws ParseException {
//		String dateStr = "2019-10-30T12:02:56+00:00";
//		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		String dateStr = "2019-10-30T12:02:56+0000";
		DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
			Date date = df.parse(dateStr);
			System.out.println(date.toString());
	}

}
