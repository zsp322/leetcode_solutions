// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// A binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 初始想法：对于每个node, recursive down子树的高度，判断每一个NODE是否是VALID NODE
let res = true;
var isBalanced = function(root) {
    if (root === null) return true;
    res = false;
    height(root);
    return res;
};

const height = function(root) {
    if (root === null) return 0;

    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) res = false;

    return Math.max(leftHeight, rightHeight) + 1;
}

// 没有全局变量的写法, 九章算法解法
const isBalanced = function(root) {
    return maxDepth(root) != -1;
}

const maxDepth = function(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);

    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) return -1; //Invalid

    return Math.max(leftHeight, rightHeight) + 1;
}