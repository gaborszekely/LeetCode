// https://leetcode.com/problems/longest-common-subsequence/description/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text1.length + 1 }, () =>
    Array.from({ length: text2.length + 1 }, () => 0)
  );

  for (let i = 1; i < dp.length; ++i) {
    for (let j = 1; j < dp[0].length; ++j) {
      const char1 = text1[i - 1];
      const char2 = text2[j - 1];

      if (char1 === char2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp.at(-1).at(-1);
};
