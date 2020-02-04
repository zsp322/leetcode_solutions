class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List <Integer> res = new ArrayList < > ();
        Stack <TreeNode> stack = new Stack < > ();

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            res.add(root.val);
            root = root.right;
        }
        return res;
    }
}

// 左中右
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);

        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            boolean isLeaft = false;
            if (cur.right != null) stack.push(cur.right);
            stack.push(cur);
            if (cur.left != null) stack.push(cur.left);

            if ()
        }
    }
}