import java.util.*;

class Solution {
    public int lastStoneWeight(int[] stones) {
        Comparator<Integer> numComparator = (a, b) -> {
            return b - a;
        };
        PriorityQueue<Integer> pq = new PriorityQueue<>(numComparator);

        for (int stone : stones) {
            pq.add(stone);
        }

        while (pq.size() > 1) {
            int biggest = pq.remove();
            int secondBiggest = pq.remove();
            int diff = biggest - secondBiggest;
            if (diff > 0) {
                pq.add(diff);
            }
        }

        return pq.size() == 1 ? pq.remove() : 0;
    }
}