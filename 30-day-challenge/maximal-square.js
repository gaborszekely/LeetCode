const get = (ary, r, c) => (ary[r] && ary[r][c] ? ary[r][c] : 0);

var maximalSquare = function (matrix) {
  if (matrix.length === 0) return 0;

  let largestSquare = 0;

  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[0].length - 1; j >= 0; --j) {
      if (matrix[i][j] === "0") {
        continue;
      }
      matrix[i][j] =
        1 +
        Math.min(
          get(matrix, i + 1, j),
          get(matrix, i, j + 1),
          get(matrix, i + 1, j + 1)
        );
      largestSquare = Math.max(largestSquare, matrix[i][j]);
    }
  }

  return largestSquare ** 2;
};
