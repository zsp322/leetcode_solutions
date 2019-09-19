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
// BFS Solution
// Follow up: find kth largest -- Heap/Quick Select
var maxLevelSum = function(root) {
    if (root === null) return 0;
    let res = Number.MAX_SAFE_INTEGER;

    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let size = queue.length;
        let levelSum = 0;
        for (let i = 0; i < size; i++) {
            let curNode = queue.shift();
            levelSum += curNode.val;

            if (curNode.left != null) queue.push(curNode.left);
            if (curNode.right != null) queue.push(curNode.right);
        }

        res = Math.max(res, levelSum);
    }
    return res;
};

//DFS Solution --in order solution

var maxLevelSum = function(root) {
    let levelSums = new Array(10000);
    inOrder(root, levelSums, 0);

    let maxIdx = 0;
    for (let i = 0; i < n; i++) {
        maxIdx = levelSums[maxIdx] < levelSums[i] ? i : maxIdx;
    }
    return maxIdx;
};

var inOrder = function(root, levelSums, level) {
    if (root != null) {
        inOrder(root.left, levelSums, level + 1);
        levelSums[level] += root.val;
        inOrder(root.right, levelSums, level + 1);
    }
}