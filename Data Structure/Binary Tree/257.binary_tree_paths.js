/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

// Standard DFS problem in Binary Tree
var binaryTreePaths = function(root) {
    if (root === null) return [];
    let res = [];
    dfsHelper(res, root, [root]); // 第一次写的时候，我初始化这个arr为空，并没有放入这个ROOT结点
    return res;
};


const dfsHelper = function(res, root, curPath) {
    if (root.left === null && root.right === null) {
        let str = construct(curPath);
        res.push(str);
    } else {
        if (root.left != null) {
            curPath.push(root.left);
            dfsHelper(res, root.left, curPath);
            curPath.pop();
        }

        if (root.right != null) {
            curPath.push(root.right);
            dfsHelper(res, root.right, curPath);
            curPath.pop();
        }
    }
}

const construct = function (arr) {
    let res = '';
    for (let i = 0; i < arr.length - 1; i++) {
        res += arr[i].val;
        res += '->'
    }

    res += arr[arr.length - 1].val;
    return res;
}