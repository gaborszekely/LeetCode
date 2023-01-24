/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const midEl = nums[mid];

    if (midEl === target) {
      return mid;
    }

    if (midEl < target) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return -1;
};
