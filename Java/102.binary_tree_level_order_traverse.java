/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

// 用Recursive解法写BFS
class Solution {
    List<List<Integer>> res = new ArrayList<>();
    public List<List<Integer>> levelOrder(TreeNode root) {
        traverse(root, 0);
        return res;
    }
    public void traverse(TreeNode root, int level) {
        if (res.size() == level) {
            res.add(new ArrayList<>());
        }
        res.get(level).add(root.val);
        if (root.left != null) {
            traverse(root.left, level + 1);
        }
        if (root.right != null) {
            traverse(root.right, level + 1);
        }
    }
}

// Iterative解法省去不写