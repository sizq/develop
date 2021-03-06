package soft.develop.meizitu;
import java.io.IOException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

public class meizitu {
	private static meizitu meizitu = new meizitu();
	
	public static String path = "H:/meizitu/"; //存放文件地址
	public static long restTime = 3000; //休眠时间 （豪秒）不能太快
	
	
	public static void main(String[] args) {
//		获取大分类下全部 如：http://www.mzitu.com/xinggan/
//		getClassification("https://www.mzitu.com/");
		//https://www.mzitu.com/tag/jiemeihua/
		//获取指定页数 如：http://www.mzitu.com/mm/page/2/
		getEachpage("https://www.mzitu.com/208459");
		
//		获取每组图片 如：http://www.mzitu.com/148600
//		getEachGroup("http://www.mzitu.com/147217");
	}
	/**
	* @Title: getClassification 
	* @Description: 大分类  
	* @param url    参数 
	* void  返回类型 
	* @throws
	 */
	public static void getClassification(String url){
		
		Document doc = meizitu.getDocument(url);
		// 获取总页数html
		Elements PageCountHtml = doc.select("[class=page-numbers]");
		//当前大分类总页数
		int PageCount = Integer.parseInt(PageCountHtml.get(PageCountHtml.size()-1).text());
		for (int i = 1; i <= PageCount; i++) {
			getEachpage(url+"/page/"+i+"/");
		}
	}
	/**
	 * 
	* @Title: getEachpage 
	* @Description: 获取每页组总数，并获取每个图片地址
	* @param url    参数 
	* void  返回类型 
	* @throws
	 */
	public static void getEachpage(String url){
		
		Document doc = meizitu.getDocument(url);
		Elements postlist = doc.select("[class=postlist]");
		Elements liCount = postlist.select("li");
		for (int i = 0; i < liCount.size(); i++) {
			Elements a = liCount.get(i).select("span").select("a");
			String aurl = a.attr("href");
			getEachGroup(aurl);
		}
	}
	
	/**
	* @Title: getImgTotalNumber 
	* @Description: 获取每组图片总数，并获取每个图片地址
	* @param url    参数 
	* void  返回类型 
	* @throws
	 */
	public static void getEachGroup(String url){
		
		Document doc = meizitu.getDocument(url);
		Elements pageNumberHtml = doc.select("[class=pagenavi]");
		Elements a = pageNumberHtml.select("a");
		int pageNumber = Integer.parseInt(a.get(a.size()-2).select("span").text());
		for (int i = 1; i <= pageNumber; i++) {
			String groupingurl = url+"/"+i;
			Document imgdoc = meizitu.getDocument(groupingurl);
			Elements select = imgdoc.select("[class=main-image]");
			Elements img = select.select("img");
			String imgurl = img.attr("src"); //下载图片地址
			String Suffix = imgurl.substring(imgurl.lastIndexOf("."));
			String title = img.attr("alt");//标题
			
			String name = title+"_"+i+Suffix; //文件名
			String savePath = path+title; //保存文件地址
			
		try {
				DownloadImage.download(imgurl, name, savePath,restTime);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	/**
	 * 
	 * @param url
	 *            访问路径
	 * @return
	 */
	public Document getDocument(String url) {
		try {
			// 5000是设置连接超时时间，单位ms
			Connection connection = Jsoup.connect(url).timeout(5000);
			//直接get服务器有可能会拒绝请求，在这里模拟用户正常访问
			connection.header("upgrade-insecure-requests","1");
			connection.header("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36");
			connection.header("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3");
			connection.header("Accept-Encoding","gzip, deflate, br");
			connection.header("Accept-Language","zh-CN,zh;q=0.9");//max-age=0
			connection.header(":authority","www.mzitu.com");
			connection.header(":method","GET");
			connection.header(":path","/208459");
			connection.header(":scheme","https");
			
			connection.header("cookie","Hm_lvt_cb7f29be3c304cd3bb0c65a4faa96c30=1602573105,1602820232,1603695944,1604555512; Hm_lpvt_cb7f29be3c304cd3bb0c65a4faa96c30=1604555697");
			connection.header("cache-control","max-age=0");
			connection.header("if-modified-since","Wed, 04 Nov 2020 16:44:38 GMT");
			connection.header("sec-fetch-dest","document");
			connection.header("sec-fetch-mode","navigate");
			connection.header("sec-fetch-site","none");
			connection.header("sec-fetch-user","?1");
			connection.header("upgrade-insecure-requests","1");
			return connection.get();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
}
