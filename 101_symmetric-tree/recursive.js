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
  if (root.left?.val !== root.right?.val) return false;
  return compare(root.left, root.right);
};

function compare(node1, node2) {
  if (!node1 && !node2) return true;
  if (
    node1?.left?.val !== node2?.right?.val ||
    node1?.right?.val !== node2?.left?.val
  ) {
    return false;
  }
  return (
    compare(node1?.left, node2?.right) && compare(node1?.right, node2?.left)
  );
}
