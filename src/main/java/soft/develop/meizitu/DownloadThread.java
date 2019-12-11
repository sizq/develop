package soft.develop.meizitu;

public class DownloadThread extends Thread {
	private int start;
	private int end;
	private String url;
	

	public DownloadThread(int start, int end, String url) {
		this.start = start;
		this.end = end;
		this.url = url;
	}


	@Override
	public void run() {
		for (int i = start; i < end; i++) {
			meizitu.getEachpage(url+"/page/"+i+"/");
		}
	}

}
