/*
https://leetcode.com/problems/largest-number/description/

Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = nums => {
  return nums
    .sort((a, b) => {
      const aConcat = Number(`${a}${b}`);
      const bConcat = Number(`${b}${a}`);
      return aConcat > bConcat ? -1 : 1;
    })
    .join('')
    .replace(/^0+/, '0');
};
