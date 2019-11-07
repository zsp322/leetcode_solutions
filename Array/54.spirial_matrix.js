var spiralOrder = function(matrix) {
    let res = [];
    if (matrix === null || matrix.length === 0) return res;

    let r1 = 0;
    let r2 = matrix.length - 1;

    let c1 = 0;
    let c2 = matrix[0].length - 1;

    while (r1 <= r2 && c1 <= c2) {
        for (let i = c1; i <= c2; i++) res.push(matrix[r1][i]);
        for (let i = r1; i <= r2; i++) res.push(matrix[i][c2]);

        // 存在只剩下一个column的情况
        if (c1 < c2 && r1 < r2) {
            for (let i = c2 - 1; i > c2; i--) res.push(matrix[r2][i]);
            for (let i = r2 + 1; i > r1; i--) res.push(matrix[i][c1]);
        }

        r1++;
        r2--;
        c1++;
        c2--;

    }

    return res;
};