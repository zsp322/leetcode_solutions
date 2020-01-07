class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return root;
        if (p.val < root.val && q.val < root.val) return root;
        if (q.val > root.val && p.val > root.val) return root;
        return root;
    }
}