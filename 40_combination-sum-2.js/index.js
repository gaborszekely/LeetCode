/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];
  const path = [];

  function inner(i, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let j = i; j < candidates.length; ++j) {
      if (j > i && candidates[j] === candidates[j - 1]) continue;
      const candidate = candidates[j];
      const newSum = sum + candidate;
      if (newSum > target) break;
      path.push(candidate);
      inner(j + 1, newSum);
      path.pop();
    }
  }

  inner(0, 0);

  return result;
};
