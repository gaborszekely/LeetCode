// https://leetcode.com/problems/binary-tree-right-side-view/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  let currLevel = 0;

  if (!root) return res;

  const queue = [{ node: root, level: 0 }];

  while (queue.length) {
    const { node, level } = queue.shift();

    if (node.left) {
      queue.push({ node: node.left, level: level + 1 });
    }

    if (node.right) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (!queue[0] || queue[0].level !== level) {
      res.push(node.val);
      currLevel++;
    }
  }

  return res;
};
