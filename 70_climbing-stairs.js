/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prev2 = 1;
  let prev = 2;

  if (n === 1) return prev2;
  if (n === 2) return prev;

  for (let i = 0; i < n - 2; ++i) {
    [prev2, prev] = [prev, prev2 + prev];
  }

  return prev;
};
