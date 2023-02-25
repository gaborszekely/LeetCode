/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const basket = new Map();
  let total = 0;
  let result = 0;
  let l = 0;

  const addFruitToBasket = fruit => {
    basket.set(fruit, (basket.get(fruit) || 0) + 1);
    total++;
    result = Math.max(result, total);
  };

  const removeFruitFromBasket = fruit => {
    basket.set(fruit, basket.get(fruit) - 1);
    if (basket.get(fruit) === 0) {
      basket.delete(fruit);
    }
    total--;
  };

  for (let r = 0; r < fruits.length; ++r) {
    const right = fruits[r];

    if (basket.size < 2 || basket.has(right)) {
      addFruitToBasket(right);
      continue;
    }

    // Too many fruits in the basket - remove them until a spot frees up.
    while (basket.size === 2) {
      removeFruitFromBasket(fruits[l]);
      l++;
    }

    addFruitToBasket(right);
  }

  return result;
};
