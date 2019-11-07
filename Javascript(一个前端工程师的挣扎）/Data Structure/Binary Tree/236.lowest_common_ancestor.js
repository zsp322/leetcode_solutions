/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 自己写的，代码有点繁琐
// 值得注意的这里有个点--LEETCODE上两个点必须存在， 若两个点未必存在树上，第一个check条件不成立

var lowestCommonAncestor = function(root, p, q) {
     if (root === null || root === p || root === q) return root; //因为一定存在在树上，所以找到目标点即可返回

     let leftNode = lowestCommonAncestor(root.left, p, q);
     let rightNode = lowestCommonAncestor(root.right, p, q);

     if (leftNode === null && rightNode != null) return rightNode;
     if (rightNode === null && leftNode != null) return leftNode;

     if (leftNode != null && rightNode != null) return root;

     return null;

};


// LINTCODE 版本

let isPValid = false;
let isQValid = false;
const lowestCommonAncestor3 = function(root,  p,  q) {
    if (root == null) return root;
    let res = helper(root, p, q);

    if (isPValid && isQValid) return res;
    return null;
}

const helper = function (root, p, q) {
    if (root == null) return root;
    let leftNode = helper(root.left, p, q); //这里是考点，如果目标点不能保证在树上，则要先进行遍历
    let rightNode = helper(root.right, p, q);

    if (root == p) {
        isPValid = true;
        return root;
    } else if (root == q) {
        isQValid = true;
        return root;
    }
    if (leftNode != null && rightNode != null) return root;

    else if (leftNode != null) {
        return leftNode;
    }
    else if (rightNode != null) return rightNode;
    return null;
}