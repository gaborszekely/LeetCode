class Solution {
    public int maxSumTwoNoOverlap(int[] A, int L, int M) {
        PrefixSum prefixSums = new PrefixSum(A);
        int max = Integer.MIN_VALUE;

        // Check all options for first range
        for (int i = L - 1; i < A.length; ++i) {
            int r1 = prefixSums.findRangeSum(i - L + 1, i);

            // Check to the left of first range for second
            for (int j = M - 1; j <= i - L; ++j) {
                int r2 = prefixSums.findRangeSum(j - M + 1, j);
                max = Math.max(max, r1 + r2);
            }

            // Check to the right of first range for second
            for (int j = i + M; j < A.length; ++j) {
                int r2 = prefixSums.findRangeSum(j - M + 1, j);
                max = Math.max(max, r1 + r2);
            }
        }

        return max;
    }
}

class PrefixSum {
    private int[] prefixVals;

    public PrefixSum(int[] vals) {
        prefixVals = generatePrefixVals(vals);
    }

    public int findRangeSum(int i, int j) {
        return i == 0 ? prefixVals[j] : prefixVals[j] - prefixVals[i - 1];
    }

    private int[] generatePrefixVals(int[] vals) {
        int[] res = new int[vals.length];
        res[0] = vals[0];

        for (int i = 1; i < vals.length; ++i) {
            res[i] = res[i - 1] + vals[i];
        }

        return res;
    }
}
