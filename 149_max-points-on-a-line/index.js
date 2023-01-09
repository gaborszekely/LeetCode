/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length === 1) return 1;
  const equations = {};
  let max = 0;

  for (const point of points) {
    for (const point2 of points) {
      if (point === point2) continue;
      const key = getSlopeIntercept(point, point2);
      equations[key] ||= new Set();
      equations[key].add(point.join(':'));
      equations[key].add(point2.join(':'));
      max = Math.max(max, equations[key].size);
    }
  }

  return max;
};

function getSlopeIntercept([x1, y1], [x2, y2]) {
  const slope = (y2 - y1) / (x2 - x1);
  const offset = x1 === x2 ? x1 : y1 - slope * x1;
  return `${slope}:${offset}`;
}
