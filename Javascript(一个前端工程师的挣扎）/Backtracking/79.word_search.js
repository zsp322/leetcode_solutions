/**
 * Question 79. Word Search
 * Solved Strategy:
 * Date: 10/22/2018
 * Description:  The important takeaway is how to create 2D array in Javascript.
 * the way using fill in old way will make it reference to the first column
 * The proper way is
 * Array.from(Array(row_length),_=>Array(col_length).fill(inital_value));
 *
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var visited = [[]];

var exist = function(board, word) {
    if (board === null) return null;



    visited = Array.from(Array(board.length), _ => Array(board[0].length).fill(false));

    //console.log(visited);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word.charAt(0)) {
                var res = dfs(board, word, i, j, 0);

                if (res) return res;
            }
        }
    }

    return false;
};

function dfs(board, word, i, j, cur) {

    if (cur === word.length) {
        //console.log("i was called");

        return true;
    }

    //console.log(visited);
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return false;
    }
    if  (visited[i][j] || word.charAt(cur) != board[i][j]) {
//         console.log("I am in positon row: " + i + " col: " + j);
//         console.log("Current Checking: " + cur);
//         console.log("The cell I wanna check is " + visited[i][j]);

        return false;
    }
    else {
        visited[ i ][ j ] = true;  // marked as visited
        var flag = dfs(board, word, i + 1, j, cur + 1) ||
            dfs(board, word, i - 1, j , cur + 1) ||
            dfs(board, word, i, j + 1, cur + 1) ||
            dfs(board, word, i , j - 1, cur + 1);

        if (flag) return flag;

        visited[i][j] = false;

        return flag;
    }
}