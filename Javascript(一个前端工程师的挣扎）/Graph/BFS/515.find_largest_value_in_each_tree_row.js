// 简单而又基础的一道题，轻松解决
// DFS解法有些意思，值得了解下
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
// BFS solution
var largestValues = function(root) {
    if (root === null) return [];
    
    let res = [];
    let queue = [];
    queue.push(root);
    
    while (queue.length) {
        let size = queue.length;
        let tempMax = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            
            if (cur.val > tempMax) tempMax = cur.val;
            if (cur.left != null) queue.push(cur.left);
            if (cur.right != null) queue.push(cur.right);
        }
        
        res.push(tempMax);
    }
    
    return res;
};


// DFS Solution -- Coming from Pre-order solution
var largestValues = function(root) {
    if (root === null) return [];
    let res = [];
    dfsHelper(root, res, 0);
    return res;
    
}

const dfsHelper = function(root, res, depth) {
    if (root === null) return;

    if (depth === res.length) {
        res.push(root.val)
    } else {
        res[depth] = Math.max(res[depth], root.val);
    }

    dfsHelper(root.left, res, depth + 1);
    dfsHelper(root.right, res, depth + 1);

}