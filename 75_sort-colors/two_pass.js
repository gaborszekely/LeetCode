/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const whiteStartI = swapToFront(nums, 0, 0);
  swapToFront(nums, 1, whiteStartI);
};

function swapToFront(nums, num, startI) {
  let headI = startI;
  for (let i = startI; i < nums.length; ++i) {
    if (nums[i] === num) {
      swap(nums, i, headI);
      headI++;
    }
  }
  return headI;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
