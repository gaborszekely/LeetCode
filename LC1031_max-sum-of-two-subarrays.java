/** O(n) optimized solution */
class OptimizedSolution {
    public int maxSumTwoNoOverlap(int[] A, int L, int M) {
        PrefixSum prefixSums = new PrefixSum(A);
        int max = Integer.MIN_VALUE;

        int[] maxSumsToLeft = getMaxSumsToLeft(prefixSums, M - 1, A.length - 1, M);
        int[] maxSumsToRight = getMaxSumsToRight(prefixSums, 0, A.length - M, M);

        for (int i = L - 1; i < A.length; ++i) {
            int lRangeSum = prefixSums.findRangeSum(i - L + 1, i);
            int leftMax = get(maxSumsToLeft, i - L);
            int rightMax = get(maxSumsToRight, i + 1);
            max = Math.max(max, Math.max(lRangeSum + leftMax, lRangeSum + rightMax));
        }

        return max;
    }

    private int[] getMaxSumsToLeft(PrefixSum sums, int l, int r, int M) {
        System.out.println(l);
        int[] res = new int[sums.length()];
        res[l] = sums.findRangeSum(0, l);
        for (int i = 0; i <= r; ++i) {
            if (i < l) {
                res[i] = Integer.MIN_VALUE;
                continue;
            }
            int sum = sums.findRangeSum(i - M + 1, i);
            res[i] = Math.max(sum, get(res, i - 1));
        }
        return res;
    }

    private int[] getMaxSumsToRight(PrefixSum sums, int l, int r, int M) {
        int[] res = new int[sums.length()];
        res[r] = sums.findRangeSum(r, sums.length() - 1);
        for (int i = sums.length() - 1; i >= l; --i) {
            if (i > r) {
                res[i] = Integer.MIN_VALUE;
                continue;
            }
            int sum = sums.findRangeSum(i, i + M - 1);
            res[i] = Math.max(sum, get(res, i + 1));
        }
        return res;
    }

    private int get(int[] ary, int i) {
        if (i < 0 || i >= ary.length) {
            return Integer.MIN_VALUE;
        }
        return ary[i];
    }
}

/** O(n^2) original solution */
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
