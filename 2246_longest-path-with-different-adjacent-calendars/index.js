/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  const children = parent.reduce((acc, el, i) => {
    acc[el] ||= [];
    acc[el].push(i);
    return acc;
  }, {});

  let result = 0;

  // Returns the longest non-wrapping path starting at the given node.
  const inner = (node = 0) => {
    const pq = new MinPriorityQueue();
    for (const child of children[node] || []) {
      const maxPath = inner(child);
      if (s[node] === s[child]) continue;
      pq.enqueue(maxPath);
      if (pq.size() > 2) {
        pq.dequeue();
      }
    }

    const arr = pq.toArray();
    result = Math.max(result, 1 + sum(arr));
    return 1 + (arr.at(-1)?.element || 0);
  };

  inner();

  return result;
};

const sum = arr => arr.reduce((acc, val) => acc + val.element, 0);
