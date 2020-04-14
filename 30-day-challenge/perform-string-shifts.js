/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let leftShifts = 0;
  for (let i = 0; i < shift.length; ++i) {
    const [currDir, currAmt] = shift[i];
    leftShifts += currDir === 0 ? currAmt : -currAmt;
  }

  leftShifts = leftShifts % s.length;
  const sAry = s.split("");

  if (leftShifts > 0) {
    while (leftShifts-- > 0) {
      sAry.push(sAry.shift());
    }
  } else {
    while (leftShifts++ < 0) {
      sAry.unshift(sAry.pop());
    }
  }

  return sAry.join("");
};
