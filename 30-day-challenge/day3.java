class Solution {
    public void moveZeroes(int[] nums) {
        int firstZeroIndex = -1;

        for (int i = 0; i < nums.length; ++i) {
            int current = nums[i];
            if (current == 0) {
                if (firstZeroIndex < 0) {
                    firstZeroIndex = i;
                }
                continue;
            }

            if (firstZeroIndex < 0)
                continue;

            int tmp = nums[i];
            nums[i] = nums[firstZeroIndex];
            nums[firstZeroIndex] = tmp;

            firstZeroIndex++;
        }
    }
}