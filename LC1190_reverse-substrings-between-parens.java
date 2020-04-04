import java.util.*;

class Solution {
    public String reverseParentheses(String s) {
        Stack<String> stack = new Stack<>();
        stack.push("");

        for (int i = 0; i < s.length(); ++i) {
            char token = s.charAt(i);

            if (token == '(') {
                stack.push("");
                continue;
            }

            int lastIndex = stack.size() - 1;

            if (token == ')') {
                String curr = stack.pop();
                stack.set(lastIndex - 1, stack.get(lastIndex - 1) + reverse(curr));
                continue;
            }

            stack.set(lastIndex, stack.get(lastIndex) + token);
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