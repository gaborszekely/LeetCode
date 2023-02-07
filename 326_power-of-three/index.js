/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (true) {
    if (n < 1) return false;
    if (n === 1) return true;
    if (n % 3 !== 0) {
      return false;
    }
    n /= 3;
  }
};
