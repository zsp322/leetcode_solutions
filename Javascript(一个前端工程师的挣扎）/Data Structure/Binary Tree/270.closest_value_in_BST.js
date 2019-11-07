/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root === null) return 0;
    let minValue = Number.MAX_SAFE_INTEGER;
    let minNode = null;
    while (root != null) {
        minValue = Math.min(differ(target.val, root.val));
        if (minValue === differ(target.val, root.val)) minNode = root;
        if (target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return minNode.val;
};

const differ = function(num1, num2) {
    return Math.abs(num1 - num2);
}