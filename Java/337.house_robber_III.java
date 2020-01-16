// NAIVE SOLUTION
class Solution {
    public int rob(TreeNode root) {
        if (root == null) return 0;

        int takeRootVal = root.val;
        if (root.left != null) {
            takeRootVal += rob(root.left.left);
            takeRootVal += rob(root.left.right);
        }
        if (root.right != null) {
            takeRootVal += rob(root.right.left);
            takeRootVal += rob(root.right.right);
        }

        int notTakeRootVal = rob(root.left) + rob(root.right);

        return Math.max(takeRootVal, notTakeRootVal);
    }
}


// 对solution进行剪枝
class Solution {
    public int rob(TreeNode root) {
        return rob(root, new HashMap<TreeNode, Integer>());
    }


    public int rob(TreeNode root, HashMap<TreeNode, Integer> dic) {
        if (root == null) return 0;
        if (dic.containsKey(root)) return dic.get(root);

        int takeRootVal = root.val;

        if (root.left != null) {
            takeRootVal += rob(root.left.left, dic);
            takeRootVal += rob(root.left.right, dic);
        }
        if (root.right != null) {
            takeRootVal += rob(root.right.left, dic);
            takeRootVal += rob(root.right.right, dic);
        }

        int notTakeRootVal = rob(root.left, dic) + rob(root.right, dic);

        dic.put(root, Math.max(takeRootVal, notTakeRootVal));
        return dic.get(root);
    }
}


// 返回一个针对状态进行分类的数组

class Solution {
    public int rob(TreeNode root) {
        int[] res = rob(root);
        return Math.max(res[0], res[1]);
    }

    // res[0] 没拿root
    // res[1 拿了root
    public int[] rob(TreeNode root) {
        if (root == null) return [0, 0];

        int[] left = rob(root.left);
        int[] right = rob{root.right);

        int[] res = new int[2];
        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);

        res[1] = root.val + left[0] + right[0];
    }
}