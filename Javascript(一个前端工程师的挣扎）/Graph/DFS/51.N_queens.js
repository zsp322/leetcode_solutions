var solveNQueens = function(n) {
    let res = [];
    let matrix = new Array(n).fill(null).map(arr => new Array(n).fill(null)); // Create a n * n matrix

    dfs(res, matrix, n);
    return res;

};

const dfs = function(res, matrix, leftQueens) {
    if (leftQueens === 0) {
        res.push(generateResult(matrix));
    } else {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 'X' && matrix[i][j] === 'Q') continue;

                matrix[i][j] = 'Q';
                let points = updateMatrix(matrix, [i, j]);
                dfs(res, matrix, leftQueens--);
                revertMatrix(matrix, points);
                matrix[i][j] = null;
                // 这里backtrack有问题，再把matrix复原很没有效率

            }
        }
    }
}


const isAttackable = function(point1, point2) {
    if (point1[0] === point2[0] || point1[1] === point2[1]) return true;
    if (Math.abs(point1[0] - point2[1]) === Math.abs(point1[1] - point2[0])) return true;
    return false;
}

const updateMatrix = function(matrix, point) {
    let points = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (isAttackable([i, j], point) && matrix[i][j] != 'Q') {
                matrix[i][j] = 'X';
                points.push([i ,j]);
            }
        }
    }
    return points;
}

const revertMatrix = function(matrix, points) {
    if (points === null || points.length === 0) return;
    for (let i = 0; i < points.length; i++) {
        matrix[points[i][0]][points[i][1]] = null; //Revert back
    }
}

const generateResult = function (matrix) {
    let resultMatrix;
    for (let i = 0; i < matrix.length; i++) {
        let arr = '';
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] != 'Q') matrix[i][j] = '.'
            arr += matrix[i][j];
        }
        resultMatrix.push(arr);
    }
    return resultMatrix;
}