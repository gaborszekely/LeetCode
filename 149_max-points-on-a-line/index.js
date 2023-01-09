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
      const slopeIntercept = getSlopeIntercept(point, point2);
      lines[slopeIntercept] ||= new Set();
      lines[slopeIntercept].add(point.join(':'));
      lines[slopeIntercept].add(point2.join(':'));
      max = Math.max(max, lines[slopeIntercept].size);
    }
  }

  return max;
};

function getSlopeIntercept([x1, y1], [x2, y2]) {
  const slope = (y2 - y1) / (x2 - x1);
  const intercept = x1 === x2 ? x1 : y1 - slope * x1;
  return `${slope}:${intercept}`;
}
