/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

// Recursive解法
// 自己想了一下解决出来的，也算是一种进步啦
// 分三部想
// flatten 左子树
// 右结点连上左子树， 并遍历到左子树最右结点
// 最右节点连上原右子树，然后flatten右子树
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) return;
        flatten(root.left);
        TreeNode rightNode = root.right;
        root.right = root.left;
        root.left = null;

        TreeNode cur = root;
        while (cur.right != null) {
            cur = cur.right;
        }
        cur.right = rightNode;
        flatten(rightNode);
    }
}

// Recursive解法
class Solution {
    TreeNode prev = null;
    public void flatten(TreeNode root) {
        if (root == null) return;
        flatten(root.right);
        flatten(root.left);

        root.right = prev;
        root.left = null;
        prev = root;
    }
}

// Iterative Solution
// Come from Post-order Traverse Solution
// 这个iterative解法不好想
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) return;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            if (cur.right != null) stack.push(cur.right);
            if (cur.left != null) stack.push(cur.left);
            if (!stack.isEmpty()) cur.right = stack.peek();
            cur.left = null;
        }
    }
}