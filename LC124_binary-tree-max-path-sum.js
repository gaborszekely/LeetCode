/** https://leetcode.com/problems/binary-tree-maximum-path-sum/ */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = -Infinity;
  const inner = (node) => {
    if (!node) return 0;
    const maxLeft = inner(node.left);
    const maxRight = inner(node.right);
    const maxPath = node.val + Math.max(maxLeft, maxRight, 0);
    res = Math.max(res, maxPath, node.val + maxLeft + maxRight);
    return maxPath;
  };
  inner(root);
  return res;
};
