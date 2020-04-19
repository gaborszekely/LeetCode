/**
 * Approach:
 *    If array is not rotated, binary search the entire array
 *    If target > nums[0], binary search to the left of pivot index
 *    If (target < nums[0]) binary search to the right of pivot index
 */

/**
 * Utility functions
 */

const getOrDefault = (n, defaultVal) => (n != null ? n : defaultVal);
const curry = (fn, ...args) => (...args2) => fn(...args, ...args2);

/**
 * Helpers
 */

const findPivotIndex = (nums) => {
  let i = 0,
    j = nums.length - 1;
  while (i <= j) {
    const midpoint = Math.floor((i + j) / 2);
    const midElem = nums[midpoint];
    if (
      midElem < getOrDefault(nums[midpoint - 1], -Infinity) &&
      midElem < getOrDefault(nums[midpoint + 1], Infinity)
    )
      return midpoint;
    [i, j] = midElem >= nums[0] ? [midpoint + 1, j] : [i, midpoint - 1];
  }
  return -1;
};

const binarySearch = (nums, target, i, j) => {
  while (i <= j) {
    const midpoint = Math.floor((i + j) / 2);
    const midElem = nums[midpoint];
    if (midElem === target) return midpoint;
    [i, j] = midElem < target ? [midpoint + 1, j] : [i, midpoint - 1];
  }
  return -1;
};

/**
 * Solution
 */

const search = (nums, target) => {
  const find = curry(binarySearch, nums, target);
  const pivotIndex = findPivotIndex(nums);

  // If array is not rotated
  if (pivotIndex === -1) return find(0, nums.length - 1);

  // Search to left of pivot
  if (target >= nums[0]) return find(0, pivotIndex - 1);

  // Search to right of pivot
  return find(pivotIndex, nums.length - 1);
};
