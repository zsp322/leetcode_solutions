// Easy LEVEL, bug-free

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;
    
    let queue = [];
    queue.push(root);
    
    let level = 0;
    while (queue.length) {
        let size = queue.length;
        
        for (let i = 0; i < size; i++) {
            let curNode = queue.shift();
            
            for (let j = 0; j < curNode.children.length; j++) {
                queue.push(curNode.children[j]);
            }
        }
        level++;
    }
    
    return level;
};