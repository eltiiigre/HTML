import java.util.Scanner;
import java.net.*;
import java.io.*;

public class Client{
	
	public static void main(String args[])throws IOException{
	
		Scanner in = new Scanner(System.in);
		
		Socket sock = new Socket("localhost",9999); 
		
		System.out.println("I am the Client");
		System.out.println("Enter Word:");
		
		System.out.println("");
		
		String user = in.nextLine();
		
		PrintWriter pr = new PrintWriter(sock.getOutputStream());
		
		pr.println(user);
		pr.flush();
		
		InputStreamReader inp = new InputStreamReader(sock.getInputStream());
		BufferedReader bf = new BufferedReader(inp);
		
		String count = bf.readLine();
		String str = bf.readLine();
		System.out.println("");
		System.out.println("Server Reply:");
		System.out.println("String input: " + (user)); 
		System.out.println("# of characters: " + (count));
		System.out.println("# of words: " + (str));
	
	}

}