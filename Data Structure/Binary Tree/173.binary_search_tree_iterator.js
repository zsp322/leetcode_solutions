/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

// 这是一个非常通用的利用 stack 进行 Binary Tree Iterator 的写法。
//
// stack 中保存一路走到当前节点的所有节点，stack.peek() 一直指向 iterator 指向的当前节点。
// 因此判断有没有下一个，只需要判断 stack 是否为空
// 获得下一个值，只需要返回 stack.peek() 的值，并将 stack 进行相应的变化，挪到下一个点。
//
// 挪到下一个点的算法如下：
//
// 如果当前点存在右子树，那么就是右子树中“一路向西”最左边的那个点
// 如果当前点不存在右子树，则是走到当前点的路径中，第一个左拐的点
// 访问所有节点用时O(n)，所以均摊下来访问每个节点的时间复杂度时O(1)
var BSTIterator = function(root) {
     let stack = [];
     while (root != null) {
         stack.push(root);
         root = root.left;
     }


};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let cur = this.stack[this.stack.length - 1];
    let node = cur; // Iterator

    // 已经是
    if (node.right === null) {

    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (stack.length > 0) return true;
    return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */