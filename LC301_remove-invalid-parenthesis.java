// https://leetcode.com/problems/remove-invalid-parentheses/

import java.util.*;

class Solution {
    Set<String> set = new HashSet<>();

    public List<String> removeInvalidParentheses(String s) {
        int[] diffs = findDiff(s);
        recurse(s, 0, diffs[0], diffs[1]);
        return new ArrayList<String>(set);
    }

    private void recurse(String s, int currI, int negatives, int positives) {
        if (negatives == 0 && positives == 0) {
            if (isValid(s)) {
                set.add(s);
            }
            return;
        }

        for (int i = currI; i < s.length(); ++i) {
            if (positives > 0 && s.charAt(i) == '(') {
                recurse(s.substring(0, i) + s.substring(i + 1, s.length()), i, negatives, positives - 1);
            }

            if (negatives > 0 && s.charAt(i) == ')') {
                recurse(s.substring(0, i) + s.substring(i + 1, s.length()), i, negatives - 1, positives);
            }
        }

    }

    private int[] findDiff(String s) {
        int negative = 0;
        int count = 0;

        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '(')
                count++;
            if (s.charAt(i) == ')')
                count--;

            if (count < 0) {
                negative++;
                count = 0;
            }
        }

        return new int[] { negative, count };
    }

    private boolean isValid(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); ++i) {
            if (s.charAt(i) == '(')
                count++;
            if (s.charAt(i) == ')')
                count--;
            if (count < 0)
                return false;
        }
        return count == 0;
    }
}