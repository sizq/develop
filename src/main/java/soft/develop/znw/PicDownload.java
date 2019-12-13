package soft.develop.znw;

import java.io.IOException;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import soft.develop.meizitu.DownloadImage;

public class PicDownload {
	private static PicDownload picDownload = new PicDownload();
	public static String path = "F:/znw/"; //存放文件地址
	public static long restTime = 2000; //休眠时间 （豪秒）不能太快
	
	public static void main(String[] args) {
		//获取每组图片 如：http://www.mzitu.com/148600
			getEachGroup("https://www.znwz.net/9259.html");
	}
	
	
	
	/**
	* @Title: getImgTotalNumber 
	* @Description: 获取每组图片总数，并获取每个图片地址
	* @param url    参数 
	* void  返回类型 
	* @throws
	 */
	public static void getEachGroup(String url){
		
		Document doc = picDownload.getDocument(url);
		Elements pageNumberHtml = doc.select("[class=article-paging]");
		Elements a = pageNumberHtml.select("a");
		for (int i = 1; i <= a.size(); i++) {
			Element element = a.get(i);
			String href = element.attr("href");
			Document document = picDownload.getDocument(href);
//			System.out.println(document);
			Elements pic = document.select("[class=article-content]");
			Elements img = pic.select("img");
			String imgurl = img.attr("src"); //下载图片地址
			System.out.println("图片路径："+imgurl);
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
		
		
		
//		for (int i = 1; i <= a.size(); i++) {
//			String groupingurl = url+"/"+i;
//			Document imgdoc = picDownload.getDocument(groupingurl);
//			Elements select = imgdoc.select("[class=main-image]");
//			Elements img = select.select("img");
//			String imgurl = img.attr("src"); //下载图片地址
//			String Suffix = imgurl.substring(imgurl.lastIndexOf("."));
//			String title = img.attr("alt");//标题
//			
//			String name = title+"_"+i+Suffix; //文件名
//			String savePath = path+title; //保存文件地址
//			
//		try {
//				DownloadImage.download(imgurl, name, savePath,restTime);
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
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
			connection.header("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3");
			connection.header("Accept-Encoding","gzip, deflate, br");
			connection.header("Accept-Language","zh-CN,zh;q=0.9");
			connection.header("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36");
			return connection.get();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

}
