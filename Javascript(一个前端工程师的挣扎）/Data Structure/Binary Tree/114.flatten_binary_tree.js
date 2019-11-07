/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 自己写的代码，不是很简洁，也有些瑕疵不过还在是理解了题目
var flatten = function(root) {
    if (root === null) return root;
    helper(root);
    return root;
};


const helper = function (root) {
    if (root === null) return;

    helper(root.left);
    helper(root.right);

    let tempRight = root.right;
    root.right = root.left;

    let cur = root;
    while (cur.right != null) cur = cur.right;

    cur.right = tempRight;
    root.left = null;
}


