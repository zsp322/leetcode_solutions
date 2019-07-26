// Date: April 17th
// Tag: BFS / Medium
// 心得：—  非常好的一道题，我想的时候两个思路bfs/dfs都想到了个大概，但是想不出来怎么实现，说明我对图的遍历还是没有吃透，题目稍微变化下就有点迷糊
// —  BFS的思路其实就是把tree转化成graph,然后就迎刃而解了
// — 没有bug free的解出怎么建表


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, K) {
    if (root === null) return [];
    let dic = new Map();
    buildGraph(root, null, dic);
    
    let visited = new Set();
    let queue = [];
    
    visited.add(target);
    queue.push(target);
    
    let res = [];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            visited.add(cur);
            let neighbors = dic.get(cur);
            if (K === 0) {
                res.push(cur.val);
            } else {
                for (let j = 0; j < neighbors.length; j++) {
                    if (!visited.has(neighbors[j])) queue.push(neighbors[j]);
                }
            }
            
            
        }
        if (K === 0) return res;
        K--;
    }
    
    return res;
};

const buildGraph = function(node, parent, dic) {
    if (node === null) return;
    
    if (!dic.has(node)) {
        dic.set(node, []);
        if (parent != null) {
            let temp1 = dic.get(node);
            let temp2 = dic.get(parent);
            
            temp1.push(parent);
            temp2.push(node);
            
            dic.set(node, temp1);
            dic.set(parent, temp2);
        }
        
        buildGraph(node.left, node, dic);
        buildGraph(node.right, node, dic);
    }
}