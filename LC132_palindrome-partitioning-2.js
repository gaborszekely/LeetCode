// https://leetcode.com/problems/palindrome-partitioning-ii/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s, startI = 0, memo = Array(s.length)) {
  if (startI >= s.length) return -1;

  if (memo[startI] == null) {
    let res = s.length - startI - 1;

    for (let i = startI; i < s.length; ++i) {
      if (isPalindrome(s, startI, i)) {
        res = Math.min(res, 1 + minCut(s, i + 1, memo));
      }
    }

    memo[startI] = res;
  }

  return memo[startI];
};

function isPalindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}
