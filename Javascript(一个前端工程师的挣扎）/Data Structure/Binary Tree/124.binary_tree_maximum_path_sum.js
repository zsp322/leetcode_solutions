/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxVal = Number.MIN_SAFE_INTEGER;
var maxPathSum = function(root) {
    maxVal = Number.MIN_SAFE_INTEGER;
    dfsHelper(root);
    return maxVal;
};

let dfsHelper = function (root) {
    if (root === null) return 0;

    let leftPathSum = Math.max(dfsHelper(root.left), 0); //这里有个trick就是返回的枝SUM可以省略，即于0进行比较
    let rightPathSum = Math.max(dfsHelper(root.right), 0);

    let totalPathSum = root.val + leftPathSum + rightPathSum;
    maxVal = Math.max(totalPathSum, maxVal);

    return rightPathSum > leftPathSum ? rightPathSum + root.val : leftPathSum + root.val;
}vv m