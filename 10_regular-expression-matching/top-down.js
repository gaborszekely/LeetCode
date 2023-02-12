/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  const memo = {};

  function match(sI = 0, pI = 0) {
    if (sI === str.length && pI === pattern.length) return true;
    if (pI === pattern.length) return false;

    const pChar = pattern[pI];
    const serialized = `${sI}:${pI}`;

    if (!memo[serialized]) {
      memo[serialized] = false;

      // Perform multiple matches
      if (pattern[pI + 1] === '*') {
        // Match zero times
        if (match(sI, pI + 2)) {
          memo[serialized] = true;
        } else {
          // Match 1 or more times
          for (let i = sI; i < str.length; i++) {
            if (pChar !== '.' && str[i] !== pChar) break;
            if (match(i + 1, pI + 2)) {
              memo[serialized] = true;
              break;
            }
          }
        }
        // Match any character or matching literal character.
      } else if (pChar === '.' || str[sI] === pChar) {
        memo[serialized] = match(sI + 1, pI + 1);
      }
    }
    return memo[serialized];
  }

  return match();
};
