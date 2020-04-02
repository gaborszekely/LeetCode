import java.util.*;

class Solution {
    public boolean isHappy(int n) {
        HashSet<Integer> seen = new HashSet<>();

        while (n != 1) {
            n = getNextNum(n);
            if (seen.contains(n)) {
                return false;
            }
            seen.add(n);
        }

        return true;
    }

    private int getNextNum(int num) {
        int total = 0;

        while (num > 0) {
            total += Math.pow(num % 10, 2);
            num = (int) Math.floor(num / 10);
        }

        return total;
    }
}