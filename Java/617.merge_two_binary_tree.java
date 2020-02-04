// recursive solution
class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        return helper(t1, t2);
    }

    public TreeNode helper(TreeNode t1, TreeNode t2) {
        if (t1 == null) return t2;
        if (t2 == null) return t1;

        TreeNode curRoot = new TreeNode(t1.val + t2.val);
        curRoot.left = helper(t1.left, t2.left);
        curRoot.right = helper(t1.right, t2.right);

        return curRoot;
    }
}


// iterative solution
class Solution {
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if (t1 == null) return t2;

        Stack<TreeNode[]> stack = new Stack<>();
        stack.push(new TreeNode[]{t1, t2});

        while (!stack.isEmpty()) {
            TreeNode[] cur = stack.pop();

            if (cur[0] == null || cur[1] == null) continue;

            cur[0].val += cur[1].val;
            if (cur[0].left == null) {
                cur[0].left = cur[1].left;
            } else {
                stack.push(new TreeNode[] {cur[0].left, cur[1].left});
            }

            if (cur[0].right == null) {
                cur[0].right = cur[1].right;
            } else {
                stack.push(new TreeNode[] {cur[0].right, cur[1].right});
            }
        }

        return t1;
    }
}