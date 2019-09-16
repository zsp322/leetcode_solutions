var maxCount = function(m, n, ops) {
    for (let i = 0; i < ops.length; i++) {
        m = Math.min(ops[i][0], m);
        n = Math.min(ops[i][1], n);
    }
    return m * n;
};
