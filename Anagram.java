package anagram;

import java.util.Scanner;

public class Anagram {
	
public static char[] characterArray(String s) {
	
	char[]c = new char[s.length()];
	for(int i=0;i<c.length;i++) {
		c[i]=s.charAt(i);
	}
	System.out.println(c);
	return c;
}
public static void sorting(char[]c) {
	for(int i=0;i<c.length;i++) {
		
		for(int j=i+1;j<c.length;j++) {
			if(c[i]>c[j]) {
				char temp =c[i];
				c[i]=c[j];
				c[j]=temp;
			}
		}
	}
}
private static boolean comparing(char[] c1, char[] c2) {
    for (int i = 0; i < c1.length; i++) {
        if (c1[i] != c2[i]) {
            return false;
        }
    }
    return true;
}
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    
    System.out.print("Enter first string: ");
    String str1 = scanner.nextLine();
    
    System.out.print("Enter second string: ");
    String str2 = scanner.nextLine();
    
    if(str1.length()!=str2.length()) {
    	System.out.println("NOT an Anagram");   
    	}
    else {
    	str1=str1.toLowerCase();
    	str2=str2.toLowerCase();
    	char c1[]=characterArray(str1);
    	char c2[]=characterArray(str2);
    	sorting(c1);
    	sorting(c2);
    	if(comparing(c1,c2))
    		System.out.println("Anagram");
    	else
    		System.out.println("NOT an Anagram");
    	
    }
}
}
