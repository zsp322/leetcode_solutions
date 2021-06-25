// Solution: Inorder traverse the tree and make sure it's ascending order list
// 难点在于怎么ONE-PASS去判断这个是ASCENDING LIST

class Solution {
    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;

        Stack<TreeNode> stack = new Stack<>();
        TreeNode pre = null;

        while (root != null || !stack.isEmpty()) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();

            if (pre != null && root.val <= pre.val) return false;
            pre = root;
            root = root.right;
        }

        return true;
    }
}


class Solution {
    public boolean validate(TreeNode root, Integer low, Integer high) {
        // Empty trees are valid BSTs.
        if (root == null) {
            return true;
        }
        // The current node's value must be between low and high.
        if ((low != null && root.val <= low) || (high != null && root.val >= high)) {
            return false;
        }
        // The left and right subtree must also be valid.
        return validate(root.right, root.val, high) && validate(root.left, low, root.val);
    }

    public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }
}