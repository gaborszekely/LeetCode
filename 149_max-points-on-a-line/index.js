/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length === 1) return 1;
  const lines = {};
  let max = 0;

  for (const point of points) {
    for (const point2 of points) {
      if (point === point2) continue;
      const line = getSlopeIntercept(point, point2);
      lines[line] ||= new Set();
      lines[line].add(point.join(':'));
      lines[line].add(point2.join(':'));
      max = Math.max(max, lines[line].size);
    }
  }

  return max;
};

function getSlopeIntercept([x1, y1], [x2, y2]) {
  const slope = (y2 - y1) / (x2 - x1);
  const intercept = x1 === x2 ? x1 : y1 - slope * x1;
  return `${slope}:${intercept}`;
}
