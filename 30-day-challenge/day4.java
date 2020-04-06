class Solution {
    public int maxProfit(int[] prices) {
        int res = 0;
        for (int i = 0; i < prices.length - 1; ++i) {
            res += Math.max(prices[i + 1] - prices[i], 0);
        }
        return res;
    }
}