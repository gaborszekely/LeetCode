class Solution {
    public int longestCommonSubsequence(final String text1, final String text2) {
        final char[] t1Ary = text1.toCharArray();
        final char[] t2Ary = text2.toCharArray();
        final int[][] dp = new int[t1Ary.length + 1][t2Ary.length + 1];

        for (int i = 0; i <= t1Ary.length; ++i) {
            for (int j = 0; j <= t2Ary.length; ++j) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                    continue;
                }

                final boolean newMatch = t1Ary[i - 1] == t2Ary[j - 1] && dp[i - 1][j - 1] == dp[i - 1][j];

                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j] + (newMatch ? 1 : 0));
            }
        }

        return dp[t1Ary.length][t2Ary.length];
    }
}