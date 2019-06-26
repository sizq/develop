package soft.develop;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class ReadPatchFile {
	
	public List<String> ReadAllFilePath() throws Exception {
		BufferedReader br = new BufferedReader(new FileReader("G:\\myselfSoft\\gitworkspace\\Develop\\src\\main\\java\\soft\\develop\\PatchFile.txt"));
	 List<String> list = new ArrayList<>();
		String line = null;
		while ((line = br.readLine()) != null) {
			list.add(line.trim());
			System.out.println(line.trim());
		}
		br.close();
		return list;
	}
	
	
}
