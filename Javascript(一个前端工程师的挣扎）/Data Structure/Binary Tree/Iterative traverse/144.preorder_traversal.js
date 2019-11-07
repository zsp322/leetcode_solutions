/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 // 背诵preorder比较简单
var preorderTraversal = function(root) {
    let stack = [];
    let res = [];

    if (root === null) return res;

    stack.push(root);

    while (stack.length > 0) {
      let curNode = stack.pop();

      res.add(root);

      if (curNode.right != null) stack.push(root.right);
      if (curNode.left != null) stack.push(root.left);
    }

    return res;
};
