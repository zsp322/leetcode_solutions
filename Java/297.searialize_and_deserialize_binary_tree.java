/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {
    public String reserialize(TreeNode root, String str) {
        if (root == null) {
            str += "null,";
        } else {
            str += str.valueOf(root.val) + ",";
            str = reserialize(root.left, str);
            str = reserialize(root.right, str);
        }
        return str;
    }
    public String serialize(TreeNode root) {
        return reserialize(root, "");
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        String[] data_arr = data.split(",");
        List<String> data_list = new ArrayList<String>(Arrays.asList(data_arr));
        return redeseralize(data_list);
    }

    public TreeNode redeseralize(List<String> res) {
        if (res.get(0).equals("null")) {
            res.remove(0);
            return null;
        }

        TreeNode root = new TreeNode(Integer.valueOf(res.get(0)));
        res.remove(0);

        root.left = redeseralize(res);
        root.right = redeseralize(res);

        return root;
    }
}
