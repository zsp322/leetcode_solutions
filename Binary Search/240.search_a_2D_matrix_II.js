/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// Binary Search解法
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;

    for (let i = 0; i < matrix.length; i++) {
        let diagonal = matrix[i][i];

        if (target > diagonal) {
            if (searchRow(i, target, matrix, i) || searchCol(i, target, matrix, i)) return true;
        }
    }

    return false;
};

let searchRow = function(start, target, matrix, row) {
    let left = start;
    let right = matrix[0].length;
    let arr = matrix[row];

    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return true;

        else if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    if (arr[left] === target || arr[right] === target) return true;
    return false;
}


let searchRow = function(start, target, matrix, col) {
    let left = start;
    let right = matrix.length;

    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[i][col]);
    }

    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return true;

        else if (arr[mid] > target) {
            right = mid;
        } else {
            left = mid;
        }
    }

    if (arr[left] === target || arr[right] === target) return true;
    return false;
}

// Greedy Search
var searchMatrix = function(matrix, target) {
    let col = 0;
    let row = matrix.length - 1;

    while (row >= 0 && col < matrix[0].length) {

        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else {
            return true;
        }
    }

    return false;

}


