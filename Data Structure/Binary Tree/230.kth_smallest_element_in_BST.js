/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

 // 这道题有很多种做法，heap + traverse
 // iterative inorder
var kthSmallest = function(root, k) {
    let stack = [];
    let res = []; // Heap for size k

    if (root === null) return root;
    let cur = root;

    while (cur != null && stack.length > 0) {
      while(cur.left != null) {
        stack.push(cur);
        cur = cur.left;
      }

      cur = stack.pop();
      res.push(cur);

      if (res.length === k) return cur.val;

      cur = cur.right;
    }

    return -1;
};
