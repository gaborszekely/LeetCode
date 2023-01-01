/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candies = Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; ++i) {
    // Monotonically increasing
    if (
      ratings[i] > get(ratings, i - 1, -Infinity) &&
      ratings[i] < get(ratings, i + 1, Infinity)
    ) {
      candies[i] = get(candies, i - 1, 0) + 1;
    }

    // Non-increasing
    else if (ratings[i] >= get(ratings, i + 1, -Infinity)) {
      const rightIndex = recurse(candies, ratings, i + 1);

      if (ratings[i] > get(ratings, i - 1, -Infinity)) {
        candies[i] = 1 + get(candies, i - 1, 0);
      }

      if (ratings[i] > get(ratings, i + 1, -Infinity)) {
        candies[i] = Math.max(candies[i], get(candies, i + 1, 0) + 1);
      }

      i = rightIndex;
    }
  }

  return sum(candies);
};

/** Returns the value at index i in the array, or a default value if the index is out of bounds. */
function get(ary, i, defaultVal) {
  return i >= 0 && i < ary.length ? ary[i] : defaultVal;
}

/** For monotonically decreasing values, assign 1 + # of candies of right neighbor. */
function recurse(candies, ratings, i) {
  if (i === ratings.length || ratings[i] <= get(ratings, i + 1, Infinity)) {
    return i;
  }
  const rightIndex = recurse(candies, ratings, i + 1);
  candies[i] = 1 + candies[i + 1];

  return rightIndex;
}

function sum(ary) {
  return ary.reduce((acc, i) => acc + i);
}
