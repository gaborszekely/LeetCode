/*
https://leetcode.com/problems/decode-ways/description/

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

/**
 * @param {string} s
 * @return {number}
 */
/** Approach 1: Top-down with memoization. */
var numDecodings = function (s, i = 0, cache = {}) {
  if (i === s.length) return 1;

  if (cache[i] === undefined) {
    cache[i] = 0;

    const singleDigit = Number(s[i]);
    const doubleDigit = Number(s[i] + s[i + 1]);

    if (singleDigit > 0) {
      cache[i] += numDecodings(s, i + 1, cache);
    }

    if (doubleDigit >= 10 && doubleDigit <= 26) {
      cache[i] += numDecodings(s, i + 2, cache);
    }
  }

  return cache[i];
};

/** Approach 2: Bottom-up DP. */
var numDecodings = function (s) {
  const dp = Array(s.length + 1).fill(0);
  dp[dp.length - 1] = 1;

  for (let i = s.length - 1; i >= 0; --i) {
    const singleDigit = Number(s[i]);
    const doubleDigit = Number(s[i] + s[i + 1]);

    if (singleDigit > 0) {
      dp[i] += dp[i + 1];
    }

    if (doubleDigit >= 10 && doubleDigit <= 26) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
};
