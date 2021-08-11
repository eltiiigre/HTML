
 import java.net.*;
 import java.io.*;
 public class Server{
 
	public static void main (String args[]) throws IOException{
	
	ServerSocket socks = new ServerSocket(9999);
	Socket sock = socks.accept();
	System.out.println("I am the Server");
	System.out.println("Client Connected");
	System.out.println("");
	
	InputStreamReader in = new InputStreamReader(sock.getInputStream());
	
	BufferedReader bf = new BufferedReader(in); 
	
	String str = bf.readLine();
	
	System.out.println("Client: " + str); 
	
	String srt = str;
	
	int count = 0;
		for (int i = 0; i<srt.length();i++){
			
			if(srt.charAt(i)!=' ')
				count++;
			
		}
	System.out.println("Server:");
	System.out.println("# of characters: " + count );
	System.out.println("# of words: " + wordcount(str)); 
	PrintWriter pr = new PrintWriter(sock.getOutputStream());
	
	pr.println(count);
	pr.println(wordcount(str));
	pr.flush();
	
	}
	
	public static int wordcount(String str)  {
		
		String sentence = str;
        int wordCount = 0;  
          
        for(int i = 0; i < sentence.length()-1; i++) {  
           
            if(sentence.charAt(i) == ' ' && Character.isLetter(sentence.charAt(i+1)) && (i > 0)) {  
                wordCount++;  
            }  
        }  
		
        wordCount++; 
		return wordCount;
          
	}

 }