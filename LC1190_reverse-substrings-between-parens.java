import java.util.*;

class Solution {
    public String reverseParentheses(String s) {
        Stack<String> stack = new Stack();
        stack.push("");
        
        for (int i = 0; i < s.length(); ++i) {
            char token = s.charAt(i);
            
            if (token == '(') {
                stack.push("");
                continue;
            }
            
            if (token == ')') {
                String curr = stack.pop();
                stack.push(stack.pop() + reverse(curr));
                continue;
            }
            
            stack.push(stack.pop() + token);
        }
        
        return stack.pop();
    }
    
    private String reverse(String str) {
        String res = "";
        
        for (int i = 0; i < str.length(); ++i) {
            res = str.charAt(i) + res;
        }
        
        return res;
    }
}