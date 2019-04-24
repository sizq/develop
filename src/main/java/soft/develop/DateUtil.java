package soft.develop;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

public class DateUtil {
	public static Date XMLGregorianCalendarToDate(XMLGregorianCalendar xmlgc){
		Calendar cld = Calendar.getInstance();
		cld.set(xmlgc.getYear(), xmlgc.getMonth(), xmlgc.getDay(), xmlgc.getHour(), xmlgc.getMinute(), xmlgc.getSecond());
		Date date = cld.getTime();
		return date;
	}
	
	public static XMLGregorianCalendar DateToXMLGregorianCalendar(Date date){
		Calendar cld = Calendar.getInstance();
		cld.setTime(date);
		try {
			DatatypeFactory df = DatatypeFactory.newInstance();
			XMLGregorianCalendar xmlgc = df.newXMLGregorianCalendar();
			xmlgc.setYear(cld.get(Calendar.YEAR));
			xmlgc.setMonth(cld.get(Calendar.MONTH));
			xmlgc.setDay(cld.get(Calendar.DAY_OF_MONTH));
			xmlgc.setHour(cld.get(Calendar.HOUR_OF_DAY));
			xmlgc.setMinute(cld.get(Calendar.MINUTE));
			xmlgc.setSecond(cld.get(Calendar.SECOND));
			return xmlgc;
		} catch (DatatypeConfigurationException e) {
			throw new RuntimeException(e);
		}
	}
	
	public static String dateFormat(Date date){
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return sdf.format(date);
	}
	public static String dateFormat(XMLGregorianCalendar xmlgc){
		return dateFormat(XMLGregorianCalendarToDate(xmlgc));
	}

}
