/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const ds = new DisjointSet();

  for (let i = 0; i < s1.length; ++i) {
    ds.union(s1[i], s2[i]);
  }

  let result = '';

  for (const char of baseStr) {
    result += ds.find(char);
  }

  return result;
};

class DisjointSet {
  constructor() {
    this.parents = {};
  }

  union(x, y) {
    const xParent = this.find(x);
    const yParent = this.find(y);

    if (xParent.localeCompare(yParent) < 0) {
      this.parents[yParent] = xParent;
    } else {
      this.parents[xParent] = yParent;
    }
  }

  find(x) {
    if (!this.parents[x]) return x;
    if (x !== this.parents[x]) {
      this.parents[x] = this.find(this.parents[x]);
    }

    return this.parents[x];
  }
}
