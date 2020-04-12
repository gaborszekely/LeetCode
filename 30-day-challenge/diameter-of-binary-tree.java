public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode(int x) {
    val = x;
  }
}

class Solution {
  private int solution = 0;

  public int diameterOfBinaryTree(TreeNode root) {
    if (root == null) {
      return 0;
    }
    dfs(root);
    return solution;
  }

  public int dfs(TreeNode root) {
    if (root == null) {
      return -1;
    }
    int leftPath = 1 + dfs(root.left);
    int rightPath = 1 + dfs(root.right);

    solution = Math.max(solution, leftPath + rightPath);
    return Math.max(leftPath, rightPath);
  }
}