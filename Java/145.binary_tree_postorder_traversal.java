/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// Iterative preorder - reverse做法
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        if (root == null) return new ArrayList<>();

        List<Integer> res = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            res.add(0, cur.val);


            if (cur.left != null) stack.push(cur.left);
            if (cur.right != null) stack.push(cur.right);
        }

        return res;
    }
}

    // Iterative
    // 强背下来好了
    public ArrayList<Integer> postorderTraversal(TreeNode root) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode prev = null; // previously traversed node
        TreeNode curr = root;

        if (root == null) {
            return result;
        }

        stack.push(root);
        while (!stack.empty()) {
            curr = stack.peek();
            if (prev == null || prev.left == curr || prev.right == curr) {
                // traverse down the tree
                if (curr.left != null) {
                    stack.push(curr.left);
                } else if (curr.right != null) {
                    stack.push(curr.right);
                }
            } else if (curr.left == prev) { // traverse up the tree from the left
                if (curr.right != null) {
                    stack.push(curr.right);
                }
            } else { // traverse up the tree from the right
                result.add(curr.val);
                stack.pop();
            }
            prev = curr;
        }

        return result;
    }