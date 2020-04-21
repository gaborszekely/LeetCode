/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (
  grid,
  i = 0,
  j = grid.length - 1,
  k = 0,
  l = grid[0].length - 1
) {
  if (i === j && k === l) {
    return new Node(grid[i][k], true, null, null, null, null);
  }

  const midI = Math.floor((i + j) / 2);
  const midK = Math.floor((k + l) / 2);

  const topLeft = construct(grid, i, midI, k, midK); // top left quadrant
  const topRight = construct(grid, i, midI, midK + 1, l); // top right quandrant
  const bottomLeft = construct(grid, midI + 1, j, k, midK); // bottom left quadrant
  const bottomRight = construct(grid, midI + 1, j, midK + 1, l); // bottom right quadrant

  const quadrants = [topLeft, topRight, bottomLeft, bottomRight];

  if (
    quadrants.every((quadrant) => quadrant.isLeaf) &&
    quadrants.every((quadrant) => quadrant.val === quadrants[0].val)
  ) {
    return new Node(quadrant[0].val, true, null, null, null, null);
  }

  return new Node(0, false, topLeft, topRight, bottomLeft, bottomRight);
};

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}
