// Iterative解法
var isValidBST = function(root) {
    if (root === null) return true;
    let stack = [];
    let cur = root;
    let pre = null;
    while (stack.length > 0 || cur != null) {
        while (cur != null) {
          stack.push(cur);
          cur = cur.left;
        }
        cur = stack.pop();
        if (pre != null && root.val <= pre.val) return false;
        pre = cur;
        cur = cur.right;
    }

    return true;
};

