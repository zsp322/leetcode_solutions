/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
// Using inorder to build root
class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        Map<Integer, Integer> dic = new HashMap<>();
        for (int i = postorder.length - 1; i >= 0; i--) {
            dic.put(postorder[i], i);
        }

        return constructBinaryTree(inorder, dic, 0, inorder.length - 1);
    }

    public TreeNode constructBinaryTree(int[] inorder, HashMap<Integer, Integer> dic, int startIdx, int endIdx) {
        if (startIdx > endIdx) return null;
        if (startIdx == endIdx) return inorder[startIdx];
        int rootIdx = findRootIndex(dic, inorder, startIdx, endIdx);
        int rootVal = inorder[rootIdx];
        TreeNode root = new TreeNode(rootVal);

        root.left = constructBinaryTree(inorder, dic, startIdx, rootIdx - 1);
        root.right = constructBinaryTree(inorder, dic, rootIdx + 1, endIdx);

        return root;
    }

    // return root index in the range from startIdx to endIdx
    public int findRootIndex(HashMap<Integer, Integer> dic, int[] inorder, int startIdx, int endIdx) {
        int index = startIdx;
        for (int i = startIdx; i <= endIdx; i++) {
            int curVal = inorder[i];
            if (dic.get(curVal) < dic.get(index)) index = i;
        }
        return index;
    }
}


class Solution {
    int postIdx;
    int[] postorder;
    int[] inorder;
    HashMap<Integer, Integer> dic = new HashMap<>(); // Store <index in preorder, value>

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        this.inorder = inorder;
        this.postorder = postorder;
        this.postIdx = postorder.length - 1;
        for (int i = 0; i < inorder.length; i++) {
            this.dic.put(inorder[i], i);
        }

        return helper(0, postorder.length);
    }

    public TreeNode helper(int leftIdx, int rightIdx) {
        if (leftIdx >= rightIdx) return null;

        int rootVal = postorder[postIdx];
        postIdx--;

        int index = dic.get(rootVal);
        TreeNode root = new TreeNode(rootVal);

        root.right = helper(index + 1, rightIdx);
        root.left = helper(leftIdx, index);
        return root;
    }
}