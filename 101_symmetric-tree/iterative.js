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
  let currentLevel = 0;
  const currentLevelValues = [];
  const queue = [[root, 0]];

  while (queue.length) {
    const [current, level] = queue.pop();

    if (level !== currentLevel) {
      // check that the previous level is palindromic
      if (!isPalindrome(currentLevelValues)) {
        return false;
      }

      // reset current level values
      currentLevel = level;
      currentLevelValues.length = 0;
    }

    currentLevelValues.push(current?.val);

    if (current) {
      queue.unshift([current.left, level + 1], [current.right, level + 1]);
    }
  }

  return isPalindrome(currentLevelItems);
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
