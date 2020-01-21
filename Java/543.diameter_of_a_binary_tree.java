// Recursively Solution
class Solution {
    int longestPath = Integer.MIN_VALUE;
    public int diameterOfBinaryTree(TreeNode root) {
        diameterOfBinaryTreeHelper(root);
        return longestPath == Integer.MIN_VALUE ? 0 : longestPath - 1;
    }
    public int diameterOfBinaryTreeHelper(TreeNode root) {
        if (root == null) return 0;

        int leftPath = diameterOfBinaryTreeHelper(root.left);
        int rightPath = diameterOfBinaryTreeHelper(root.right);

        longestPath = Math.max(longestPath, leftPath + rightPath + 1);
        return Math.max(leftPath, rightPath) + 1;
    }
}

// Iteratvie Solution
// All branchs/edges first solution can be converted into post order traverse
class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int overallNodeMax = 0;
        Stack<TreeNode> nodeStack = new Stack<>();
        Map<TreeNode, Integer> dic = new HashMap<>();

        nodeStack.push(root);
        while (!nodeStack.isEmpty()) {
            TreeNode cur = nodeStack.peek();

            if (cur.left != null && !dic.containsKey(cur.left)) {
                nodeStack.push(cur.left);
            } else if (cur.right != null && !dic.containsKey(cur.right)) {
                nodeStack.push(cur.right);
            } else {
                TreeNode currentNode = nodeStack.pop();

                int leftMax = dic.getOrDefault(currentNode.left, 0);
                int rightMax = dic.getOrDefault(currentNode.right, 0);
                int nodeMax = 1 + Math.max(leftMax, rightMax);

                dic.put(currentNode, nodeMax);
                overallNodeMax = Math.max(overallNodeMax, leftMax + rightMax);
            }
        }

        return overallNodeMax;
    }
}