/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

// Pre-order find out kth smallest
// Recursive
class Solution {
    private static int number = 0;
    private static int count = 0;
    public int kthSmallest(TreeNode root, int k) {
       count = k;
       helper(root);
       return number;
    }

    public void helper(TreeNode n) {
        if (n.left != null) helper(n.left);
        count--;
        if (count == 0) {
            number = n.val;
            return;
        }

        if (n.right != null) helper(n.right);
    }
}


class Solution {
    public int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }

            root = stack.pop();
            k--;
            if (k == 0) return root.val;
            root = root.right; // 这里不能加NULL CHECK的条件，要不然不会返回到PARENT NODE的上一个PAREN，会重复加入LEFT NODES
        }

        return -1;
    }
}