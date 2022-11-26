/*
https://leetcode.com/problems/top-k-frequent-elements/

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

class Solution {
    /** Approach #1 using frequency buckets (O(n)). */
    public int[] topKFrequent(int[] nums, int k) {
        var frequencies = new HashMap<Integer, Integer>();

        for (int num : nums) {
            frequencies.put(num, frequencies.getOrDefault(num, 0) + 1);
        }

        LinkedList<Integer>[] buckets = new LinkedList[nums.length + 1];

        frequencies.forEach((num, frequency) -> {
            if (buckets[frequency] == null) {
                buckets[frequency] = new LinkedList<>();
            }
            buckets[frequency].add(num);
        });

        int[] result = new int[k];

        int remaining = k - 1;

        outerloop: for (int i = buckets.length - 1; i >= 0; --i) {
            if (buckets[i] == null)
                continue;

            for (int num : buckets[i]) {
                result[remaining] = num;
                remaining--;
                if (remaining < 0) {
                    break outerloop;
                }
            }
        }

        return result;
    }

    /** Approach #2 using a Priority Queue (O(n*logn)). */
    public int[] topKFrequent2(int[] nums, int k) {
        var pq = new PriorityQueue<Pair<Integer, Integer>>((a, b) -> b.getValue() - a.getValue());
        var frequencies = new HashMap<Integer, Integer>();

        for (int num : nums) {
            frequencies.put(num, frequencies.getOrDefault(num, 0) + 1);
        }

        frequencies.forEach((key, value) -> {
            pq.add(new Pair(key, value));
        });

        int[] result = new int[k];

        for (int i = 0; i < k; ++i) {
            result[i] = pq.poll().getKey();
        }

        return result;
    }
}
