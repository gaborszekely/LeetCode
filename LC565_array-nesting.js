/*
https://leetcode.com/problems/array-nesting/

A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.

Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before a duplicate element occurs in S.

 

Example 1:

Input: A = [5,4,0,3,1,6,2]
Output: 4
Explanation: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.

One of the longest S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}
 

Note:
 - N is an integer within the range [1, 20,000].
 - The elements of A are all distinct.
 - Each element of A is an integer within the range [0, N-1].
*/

// SOLUTIONS

/**
 * O(n) time, O(n) space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = (nums) => {
  const seen = new Set();
  let max = 0;

  const buildSequence = (idx) => {
    let size = 0;

    while (!seen.has(idx)) {
      seen.add(idx);
      idx = nums[idx];
      size++;
    }

    return size;
  };

  for (let i = 0; i < nums.length; ++i) {
    max = Math.max(max, buildSequence(i));
  }

  return max;
};

/**
 * O(n) time with O(1) space.
 *
 * However, this solution mutates the original array, which is generally not preferred.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayNesting = (nums) => {
  const SEEN = 20001; // A number outside the given range of 0-20,000, which will indicate that an index has been visited.
  let max = 0;

  const buildSequence = (idx) => {
    let size = 0;

    while (nums[idx] !== SEEN) {
      let nextIdx = nums[idx];
      nums[idx] = SEEN;
      idx = nextIdx;
      size++;
    }

    return size;
  };

  for (let i = 0; i < nums.length; ++i) {
    max = Math.max(max, buildSequence(i));
  }

  return max;
};
