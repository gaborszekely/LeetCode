import java.util.*;

class Solution {
  public int threeSumClosest(int[] nums, int target) {
    Arrays.sort(nums);

    int closestDiff = Integer.MAX_VALUE;
    int res = 0;

    for (int i = 0; i < nums.length - 2; ++i) {
      int low = i + 1, high = nums.length - 1;

      while (low < high) {

        int sum = nums[i] + nums[low] + nums[high];
        int diff = Math.abs(target - sum);

        if (diff == 0)
          return target;

        if (diff < closestDiff) {
          closestDiff = diff;
          res = sum;
        }

        if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
    }

    return res;
  }
}