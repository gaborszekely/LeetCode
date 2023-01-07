/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const cache = [];

  for (let i = 0; i < gas.length; ++i) {
    const canComplete = traverse(i);
    if (canComplete) {
      return i;
    }
  }

  return -1;

  function traverse(startIndex) {
    let index = startIndex;
    let currentFuel = 0;

    while (true) {
      const fuel = gas[index];
      const costToNext = cost[index];
      const newFuel = currentFuel + fuel - costToNext;

      if (newFuel < 0) {
        return false;
      }

      // Check if there was already a path to the current gas station with a higher net remaining fuel. If so, this cannot be the optimal route.
      if (cache[index] === undefined || cache[index] < newFuel) {
        cache[index] = newFuel;
      } else {
        return false;
      }

      const nextIndex = index === gas.length - 1 ? 0 : index + 1;

      if (nextIndex === startIndex) {
        return true;
      }

      currentFuel = newFuel;
      index = nextIndex;
    }
  }
};
