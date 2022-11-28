/*
https://leetcode.com/problems/search-a-2d-matrix/description/

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // Step 1: Binary search to find the right row.
  let i = 0;
  let j = matrix.length - 1;
  let targetRow = null;

  while (i >= 0 && i <= j) {
    const mid = Math.floor((i + j) / 2);
    const midEl = matrix[mid][0];

    if (target >= midEl && target < (matrix[mid + 1]?.[0] ?? Infinity)) {
      targetRow = mid;
      break;
    }
    if (target < midEl) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  if (targetRow === null) {
    return false;
  }

  // Step 2: Binary search within the row to find the target element.
  const row = matrix[targetRow];

  i = 0;
  j = row.length - 1;

  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    const midEl = row[mid];

    if (midEl === target) {
      return true;
    }

    if (target < midEl) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  return false;
};
