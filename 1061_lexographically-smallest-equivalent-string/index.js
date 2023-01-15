/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const adjacencyList = buildAdjacencyList(s1, s2);

  // Keep a cache of [char] -> [smallest lexographical equivalent] to avoid
  // duplicate traversals.
  const cache = {};
  const seen = new Set();
  let result = '';

  for (const char of baseStr) {
    if (!cache[char]) {
      cache[char] = findSmallest(char, adjacencyList, seen);
    }
    result += cache[char];
  }

  return result;
};

/**
 * Builds an adjacency list of character relations represented as edges in a
 * graph.
 */
function buildAdjacencyList(s1, s2) {
  const adjacencyList = {};
  for (let i = 0; i < s1.length; ++i) {
    const s1Char = s1[i];
    const s2Char = s2[i];
    adjacencyList[s1Char] ||= new Set();
    adjacencyList[s1Char].add(s2Char);
    adjacencyList[s2Char] ||= new Set();
    adjacencyList[s2Char].add(s1Char);
  }

  return adjacencyList;
}

/**
 * Traverses all reachable vertices from the given character and returns the one
 * with the smallest lexographical value.
 */
function findSmallest(char, adjacencyList, seen) {
  if (char === 'a') return char;
  seen.add(char);
  let min = char;
  for (const neighbor of adjacencyList[char] || []) {
    if (!seen.has(neighbor)) {
      const smallest = findSmallest(neighbor, adjacencyList, seen);
      min = smallest.localeCompare(min) < 0 ? smallest : min;
    }
  }
  seen.delete(char);

  return min;
}
