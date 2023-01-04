/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const counts = {};
  for (const task of tasks) {
    counts[task] = (counts[task] || 0) + 1;
  }

  let result = 0;
  for (const count of Object.values(counts)) {
    if (count === 1) return -1;
    result += Math.floor(count / 3) + (count % 3 > 0 ? 1 : 0);
  }

  return result;
};
