// Common Solution
var boundaryOfBinaryTree = function(root) {
    let res = [];
    if (root === null) return res;

    if (!isLeaf(root)) res.push(root.val);

    let t = root.left;
    // Add left boundary
    while (t != null) {
        if (!isLeaf(t)) {
            res.add(t.val);
        }
        if (t.left != null) {
            t = t.left;
        } else {
            t = t.right;
        }

    }
    // Add leave nodes
    addLeaves(res, root);



    // Add right boundary nodes
    let stack = [];
    t = root.right;

    while (t != null) {
        if (!isLeaf(t)) stack.push(t.val);
        if (t.right != null) t = t.right;
        else t = t.left;
    }

    while (s.length > 0) res.push(stack.pop());

    return res;
};


const isLeaf = function (t) {
    return t.left === null && t.right === null;
}

const addLeaves = function(res, root) {
    if (isLeaf(root)) {
        res.push(root.val);
    } else {
        if (root.left != null) {
            addLeaves(res, root.left);
        }
        if (root.right != null) {
            addLeaves(res, root.right);
        }
    }
}


