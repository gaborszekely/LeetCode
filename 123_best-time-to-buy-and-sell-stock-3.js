// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const maxSecondTrades = Array(prices.length);

  let max = (min = prices[prices.length - 1]);
  let maxTrade = 0;

  // First pass, calculate maximum second trade from current index onwards
  for (let i = prices.length - 2; i >= 0; --i) {
    const curr = prices[i];
    min = Math.min(min, curr);
    if (curr > max) {
      max = min = curr;
    }
    maxTrade = Math.max(maxTrade, max - min);
    maxSecondTrades[i] = maxTrade;
  }

  let res = maxTrade;
  max = min = prices[0];
  maxTrade = 0;

  // Calculate current largest trade at index i, combine with max second trade from above to get max of two trades
  for (let i = 1; i < prices.length; ++i) {
    const curr = prices[i];
    max = Math.max(max, curr);
    if (curr < min) {
      max = min = curr;
    }
    maxTrade = Math.max(maxTrade, max - min);
    res = Math.max(res, maxTrade + maxSecondTrades[i + 1] || 0);
  }

  return res;
};
