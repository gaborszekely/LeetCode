/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const levels = [];
  const queue = [[root, 0]];

  while (queue.length) {
    const [current, level] = queue.pop();

    levels[level] ||= [];
    levels[level].push(current?.val);

    if (current) {
      queue.unshift([current.left, level + 1]);
      queue.unshift([current.right, level + 1]);
    }
  }

  return levels.every(isPalindrome);
};

function isPalindrome(level) {
  let i = 0;
  let j = level.length - 1;

  while (i <= j) {
    if (level[i] !== level[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
