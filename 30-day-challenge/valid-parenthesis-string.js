/** Original Brute Force solution  */

var checkValidString1 = function (s, startI = 0, count = 0) {
  for (let i = startI; i < s.length; ++i) {
    if (count < 0) return false;
    const c = s[i];
    if (c === "(") ++count;
    if (c === ")") --count;

    if (c === "*") {
      return (
        checkValidString1(s, i + 1, count) ||
        checkValidString1(s, i + 1, count + 1) ||
        checkValidString1(s, i + 1, count - 1)
      );
    }
  }

  return count === 0;
};

/** Optimized O(n) two-pass solution */

var checkValidString2 = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    if (c !== ")") ++count;
    else --count;
    if (count < 0) return false;
  }

  if (count == 0) return true;

  count = 0;

  for (let i = s.length - 1; i >= 0; --i) {
    const c = s[i];
    if (c !== "(") ++count;
    else --count;
    if (count < 0) return false;
  }

  return true;
};
