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
var inorderTraversal = function(root) {
    let stack = [];
    let res = [];
    if (root === null) return res;

    let cur = root;
    while (cur != null || stack.length > 0) {
      while (cur.left != null) {
        stack.push(cur);
        cur = cur.left;
      }

      cur = stack.pop();
      res.add(cur.val);
      cur = cur.right;
    }

    return res;
};
