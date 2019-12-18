/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    int maxSum = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        dfsHelper(root);
        return maxSum;
    }
    public int dfsHelper(TreeNode root) {
        if (root == null) return 0;
        int leftPathSum = Math.max(0,  dfsHelper(root.left)); // 这里一开始没想到怎么处理，如果为负数，则不用返回
        int rightPathSum = Math.max(0, dfsHelper(root.right));
        int totalPathSum = leftPathSum + rightPathSum + root.val;
        maxSum = Math.max(maxSum, totalPathSum);

        return leftPathSum > rightPathSum ? leftPathSum + root.val : rightPathSum + root.val;
    }
}