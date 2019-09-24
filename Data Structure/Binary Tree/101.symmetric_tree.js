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

// Recursive Solution
var isSymmetric = function(root) {
    if (root === null) return true;
    return isMirror(root.left, root.right);
};

const isMirror = function(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    return (left.val === right.val) && isMirror(left.right, right.left) && isMirror(left.left, right.right);
}


// Iterative Solution
var isSymmetric = function (root) {
    if (root === null) return true;

    let queue = [];

    queue.push(root.left);
    queue.push(root.right);

    while (queue.length > 0) {
        let leftNode = queue.shift();
        let rightNode = queue.shift();

        if (leftNode === null && rightNode === null) continue;

        if (leftNode === null || rightNode === null) return false;

        if (leftNode.val != rightNode.val) return false;

        queue.add(leftNode.left);
        queue.add(rightNode.right);
        queue.add(leftNode.right);
        queue.add(rightNode.left);
    }

    return true;
}