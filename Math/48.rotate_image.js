/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// EXAMPLE 1:
// Given input matrix =
//     [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
//     ],
//
//     rotate the input matrix in-place such that it becomes:
//     [
//         [7,4,1],
//         [8,5,2],
//         [9,6,3]
//     ]


// Example 2:
//
// Given input matrix =
//     [
//         [ 5, 1, 9,11],
//         [ 2, 4, 8,10],
//         [13, 3, 6, 7],
//         [15,14,12,16]
//     ],
//
//     rotate the input matrix in-place such that it becomes:
//     [
//         [15,13, 2, 5],
//         [14, 3, 4, 1],
//         [12, 6, 8, 9],
//         [16, 7,10,11]
//     ]
// 感觉是找数学规律的一道题，但是花了10分钟看不到固定的PATTERN
// Rotate Image Math pattern


/*
* clockwise rotate
* first reverse up to down, then swap the symmetry
* 1 2 3     7 8 9     7 4 1
* 4 5 6  => 4 5 6  => 8 5 2
* 7 8 9     1 2 3     9 6 3
*/
// @creditTo shichaotan from Discuss in Leetcode

var rotate = function(matrix) {
    if (matrix === null) return;

    // Reverse upside down

    let i = 0;
    let j = matrix.length - 1;

    while (i <= j) {
        let temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
        i++;
        j--;
    }

    // Flip the symmetrical ones
    for (let i = 0 ; i< matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};

// Counter clockwise
/*
 * first reverse left to right, then swap the symmetry
 * 1 2 3     3 2 1     3 6 9
 * 4 5 6  => 6 5 4  => 2 5 8
 * 7 8 9     9 8 7     1 4 7
*/

var rotateCounterClockWise = function(matrix) {
    if (matrix === null) return;

    // Reverse left to right
    for (let m = 0; m < matrix.length; m++) {
        let i = 0;
        let j = matrix[0].length - 1;
        while (i <= j) {
            let temp = matrix[m][i];
            matrix[m][i] = matrix[m][j];
            matrix[m][j] = temp;
            i++;
            j--;
        }
    }


    // Flip the symmetrical ones
    for (let i = 0 ; i< matrix.length; i++) {
        for (let j = i + 1; j < matrix[0].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};


