/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */

// 错误解法
// 一开始写的解法，用两个queue去模拟iterating的过程
// 看code里的注释去理解问题
var cloneGraph = function(node) {
    if (node === null) return null;

    let queueForOld = [];
    let queueForNew = [];
    let visited = new Set();
    let res = new Node(node.val, []);

    queueForOld.push(node);
    queueForNew.push(res);
    visited.add(node); //Not sure js set can check object hashing

    while (queueForOld.length > 0) {
        let curNode = queueForOld.shift(); // The old/present node -- Shallow copy
        visited.add(curNode);
        let neighborsList = curNode.neighbors;
        let NewNode = queueForNew.shift(); // The new node
        // No need for Level order, as long as two queues are synced
        for (let i = 0; i < neighborsList.length; i++) {
            if (!visited.has(neighborsList[i])) {
                queueForOld.push(neighborsList[i]);
            }
            let node = new Node(neighborsList[i].val, []);   // 这里当你要回头的时候，你不应该是新建一个NODE,而是应该去找原来已经新建好的NODE
            NewNode.neighbors.push(node);
            queueForNew.push(node);
        }
    }

    return res;
};

// 正确解法，建一个哈希表去存储老NODE和新NODE的映射关系
var cloneGraph = function(node) {
    if (node === null) return null;
    let queue = [];
    queue.push(node);

    let root = new Node(node.val, []);
    let dic = new Map();
    dic.set(node, root);

    while (queue.length > 0) {
        let curNode = queue.shift();
        let iterateNode = dic.get(curNode);

        for (let i = 0; i < curNode.neighbors.length; i++) {
            let tempNode = curNode.neighbors[i];

            if (dic.has(tempNode)) {
                iterateNode.neighbors.push(dic.get(tempNode));
            } else {
                let newNode = new Node(tempNode.val, []);
                iterateNode.neighbors.push(newNode);
                dic.set(tempNode, newNode);
                // Only the node has not created mapping relations need to revisit
                queue.push(tempNode);
            }
        }
    }

    return root;
}