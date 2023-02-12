var isMatch = function (s, p) {
  p = p.replaceAll(/\*+/g, '*');

  const dp = Array.from({ length: s.length + 1 }, () =>
    Array.from({ length: p.length + 1 }, () => false)
  );
  dp[0][0] = true;

  for (let i = 0; i < dp.length; ++i) {
    const sChar = s[i - 1];

    for (let j = 1; j < dp[0].length; ++j) {
      const pChar = p[j - 1];

      if (pChar === '?') {
        dp[i][j] = dp[i - 1]?.[j - 1];
      } else if (pChar === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1]?.[j] || dp[i - 1]?.[j - 1];
      } else {
        dp[i][j] = dp[i - 1]?.[j - 1] && sChar === pChar;
      }
    }
  }

  return Boolean(dp.at(-1).at(-1));
};
