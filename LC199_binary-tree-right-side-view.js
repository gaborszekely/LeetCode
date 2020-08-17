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

  const queue = new Queue([{ node: root, level: 0 }]);

  while (queue.size()) {
    const { node, level } = queue.dequeue();

    if (node.left) {
      queue.enqueue({ node: node.left, level: level + 1 });
    }

    if (node.right) {
      queue.enqueue({ node: node.right, level: level + 1 });
    }

    if (!queue.peek() || queue.peek().level !== level) {
      res.push(node.val);
      currLevel++;
    }
  }

  return res;
};

class Queue {
  constructor(initialVals = []) {
    this.size = 0;
    this.head = this.tail = new ListNode();
    initialVals.forEach((val) => {
      this.enqueue(val);
    });
  }

  enqueue(val) {
    this.size++;
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }

  dequeue() {
    if (!this.head.next) {
      return null;
    }

    this.size--;
    const first = this.head.next.val;
    this.head.next = this.head.next.next;
    return first;
  }

  peek() {
    return this.head.next ? this.head.next.val : null;
  }
}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
