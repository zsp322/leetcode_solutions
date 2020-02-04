/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// 这个代码是一种精炼过后的SOLUTION，多揣摩多模仿
//
class Solution {
    int preIdx = 0;
    int[] preorder;
    int[] inorder;
    HashMap<Integer, Integer> dic = new HashMap<>(); // Store <index in preorder, value>

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        this.preorder = preorder;
        this.inorder = inorder;

        for (int i = 0; i < inorder.length; i++) {
            dic.put(inorder[i], i);
        }

        return helper(0, preorder.length);
    }
    public TreeNode helper(int leftIdx, int rightIdx) {
        if (leftIdx >= rightIdx) return null;

        int rootValue = preorder[preIdx];
        int index = dic.get(rootValue);

        TreeNode root = new TreeNode(rootValue);
        preIdx++;
        root.left = helper(leftIdx, index);
        root.right = helper(index + 1, rightIdx);

        return root;
    }
}