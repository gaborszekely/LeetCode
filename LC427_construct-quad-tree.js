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
  if (checkVals(grid, i, j, k, l)) {
    return new Node(grid[i][k], true, null, null, null, null);
  }

  const midI = Math.floor((i + j) / 2);
  const midK = Math.floor((k + l) / 2);

  return new Node(
    0,
    false,
    construct(grid, i, midI, k, midK), // top left quadrant
    construct(grid, i, midI, midK + 1, l), // top right quandrant
    construct(grid, midI + 1, j, k, midK), // bottom left quadrant
    construct(grid, midI + 1, j, midK + 1, l) // bottom right quadrant
  );
};

function checkVals(grid, i, j, k, l) {
  for (let r = i; r <= j; ++r) {
    for (let c = k; c <= l; ++c) {
      if (grid[r][c] !== grid[i][k]) return false;
    }
  }
  return true;
}
