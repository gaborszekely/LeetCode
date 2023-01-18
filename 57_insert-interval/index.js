/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];
  // handle adding to the beginning
  if (newInterval[0] <= intervals[0][0]) {
    intervals.unshift(newInterval);
    merge(intervals, 0);
  } else {
    for (let i = 0; i < intervals.length; ++i) {
      if (
        newInterval[0] >= intervals[i][0] &&
        newInterval[0] <= (intervals[i + 1]?.[0] ?? Infinity)
      ) {
        intervals.splice(i + 1, 0, newInterval);
        merge(intervals, i);
        break;
      }
    }
  }

  return intervals;
};

function isOverlapping(interval1, interval2) {
  if (!interval2) return false;

  const [s1, e1] = interval1;
  const [s2, e2] = interval2;

  return Math.min(e1, e2) >= Math.max(s1, s2);
}

function merge(intervals, i) {
  while (i < intervals.length - 1) {
    while (isOverlapping(intervals[i], intervals[i + 1])) {
      const [s1, e1] = intervals[i];
      const [s2, e2] = intervals[i + 1];
      intervals[i][0] = Math.min(s1, s2);
      intervals[i][1] = Math.max(e1, e2);
      intervals.splice(i + 1, 1);
    }
    i++;
  }
}
