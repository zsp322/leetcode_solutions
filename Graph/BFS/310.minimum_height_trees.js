// Tag: BFS
// Level: Medium
// 一开始是intutive解法，标准BFS会超时
// 看discuss给出的解法是从leaves开始剪枝，到只剩下2个或者1个node，即middle nodes of the longest path, which is minimum height
// 收获满多的一道题，而且熟练了javascript的map object
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (edges === null) return edges;
    
    let dic = new Map(); 
    
    for (let i = 0; i < edges.length; i++) {
        let startNode = edges[i][0];
        let endNode = edges[i][1];
        
        if (dic.has(startNode)) {
            let connectedNode = dic.get(startNode);
            connectedNode.push(endNode);
            
            dic.set(startNode, connectedNode);
        } else {
            dic.set(startNode, [endNode]);
        }
        
        if (dic.has(endNode)) {
            let connectedNode = dic.get(endNode);
            connectedNode.push(startNode);
            
            dic.set(endNode, connectedNode);
        } else {
            dic.set(endNode, [startNode]);
        }
    }
    
    let leaves = [];
    for (let i = 0; i < n; i++) {
        if (!dic.has(i) || dic.get(i).length === 1) leaves.push(i); 
    }
    
   // console.log(leaves);
    while (n > 2) {
        n -= leaves.length;
        let newLeaves = [];
        
        for (let i = 0; i < leaves.length; i++) {
            let leaf = leaves[i];
            let parent = dic.get(leaf)[0];
            
            let connectedNodes = dic.get(parent);
        
            
            connectedNodes.splice(connectedNodes.indexOf(leaf), 1); // delete this node
            dic.set(parent, connectedNodes);
            dic.delete(leaf); // Delete the leaf record
            
            if (connectedNodes.length === 1) newLeaves.push(parent);
            
        }

        leaves = newLeaves;
    }
    
    return leaves;
};