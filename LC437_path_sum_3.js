/*
https://leetcode.com/problems/path-sum-iii/description/

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
 var pathSum = function(root, targetSum, prefixSums = {0: 1}, stack = []) {
    let result = 0;

    if (!root) return result;

    const latestSum = stack.at(-1) ?? 0;
    const currentSum = latestSum + root.val;
    const diff = currentSum - targetSum;
    result += prefixSums[diff] ?? 0;
    prefixSums[currentSum] = (prefixSums[currentSum] || 0) + 1;
    stack.push(currentSum);
    result += pathSum(root.left, targetSum, prefixSums, stack)
            + pathSum(root.right, targetSum, prefixSums, stack);
    stack.pop();
    prefixSums[currentSum]--;

    return result;
};