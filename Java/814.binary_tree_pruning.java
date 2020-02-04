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
    public TreeNode pruneTree(TreeNode root) {
        if (root == null) return root;

        TreeNode leftRoot = pruneTree(root.left);
        TreeNode rightRoot = pruneTree(root.right);

        if (leftRoot == null && rightRoot == null && root.val == 0) return null;

        root.left = leftRoot;
        root.right = rightRoot;

        return root;
    }
}