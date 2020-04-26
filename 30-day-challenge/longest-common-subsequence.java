class Solution {
    /**
     * Bottom-up using tabulation
     */
    public int longestCommonSubsequence(final String text1, final String text2) {
        final int[][] dp = new int[text1.length() - 1][text2.length() + 1];

        for (int i = 0; i <= text1.length(); ++i) {
            for (int j = 0; j <= text2.length(); ++j) {
                if (i == 0 || j == 0) {
                    dp[i][j] = 0;
                    continue;
                }

                final boolean newMatch = text1.charAt(i - 1) == text2.charAt(j - 1) && dp[i - 1][j - 1] == dp[i - 1][j];
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j] + (newMatch ? 1 : 0));
            }
        }

        return dp[text1.length()][text2.length()];
    }

    /**
     * Top-down using recursion with memoization
     */
    public int longestCommonSubsequenceRec(final String text1, final String text2) {
        int[][] dp = new int[text1.length()][text2.length()];
        boolean[][] visited = new boolean[text1.length()][text2.length()];
        return recurse(text2, text2, 0, 0, dp, visited);
    }

    public int recurse(final String text1, final String text2, int i1, int i2, int[][] dp, boolean[][] visited) {
        if (i1 >= text1.length() || i2 >= text2.length()) {
            return 0;
        }

        if (!visited[i1][i2]) {
            int longest = 0;
            for (int i = i1; i < text1.length(); ++i) {
                for (int j = i2; j < text2.length(); ++j) {
                    if (text1.charAt(i) == text2.charAt(j)) {
                        longest = Math.max(longest, 1 + recurse(text1, text2, i + 1, j + 1, dp, visited));
                    }
                }
            }

            dp[i1][i2] = longest;
            visited[i1][i2] = true;
        }

        return dp[i1][i2];
    }
}

/**
 * // if (i1 >= text1.length || i2 >= text2.length) { // return 0; // }
 * 
 * // const serializedKey = `${i1}:${i2}`;
 * 
 * // if (!memo[serializedKey]) { // let longest = 0; // for(let i = i1; i <
 * text1.length; ++i) { // for (let j = i2; j < text2.length; ++j) { // if
 * (text1[i] === text2[j]) { // longest = Math.max(longest, 1 +
 * longestCommonSubsequence(text1, text2, i + 1, j + 1, memo)); // } // } // }
 * 
 * // memo[serializedKey] = longest; // }
 * 
 * // return memo[serializedKey];
 */