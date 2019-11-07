/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
var closestKValues = function(root, target, k) {
    let pre = [];
    let suc = [];
    let res = [];

    let cur = root;
    while (cur != null) {
        if (target <= cur.val) {
            suc.push(cur);
            cur = cur.left;
        } else {
            pre.push(cur);
            cur = cur.right;
        }
    }

    while (k > 0) {
        if (pre.length === 0 && suc.length === 0) break;
        else if (pre.length === 0) res.push(getSuccessor(suc));
        else if (suc.length === 0) res.push(getPredecessor(pre));
        else if (target - pre[pre.length - 1] < suc[suc.length - 1] - target) res.push(getPredecessor(pre));
        else res.push(getSuccessor(suc));
        k--;
    }

    return res;
};

const getPredecessor = function(stack) {
   let cur = stack.pop();
   let p = cur.left;

   while (p != null) {
     stack.push(p);
     p = p.right;
   }

   return cur.val;
}

const getSuccessor = function(stack) {
    let cur = stack.pop();
    let p = cur.right;

    while (p != null) {
        stack.push(p);
        p = p.left;
    }
    return cur.val;
}
