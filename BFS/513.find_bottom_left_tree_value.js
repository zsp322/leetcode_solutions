// 513. Find Bottom Left Tree Value
// Tag: BFS 
// Level: Medium
// Date: April 04, 2019
// Solving Strategy: BFS 
// 心得： 自己写出来的不是最优解，需要保存一个array存着所有遍历（上一层）的结果，discuss上的最优解提出从右往左bfs，即可得到最后一个
// Node,即从左往右第一个

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
var findBottomLeftValue = function(root) {
    if (root === null) return null;
    
    let queue = []; 
    queue.push(root);
    
    while (queue.length) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            root = queue.shift();
            if (root.right != null) queue.push(root.right);
            if (root.left != null) queue.push(root.left);
            
        }
    }
    
    return root.val;
};