/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    if (board === null || board.length === 0 || board[0].length === 0) return;

    for (let i = 0; i < board.length;i++) {
        for (let j = 0; j < board[0].length; j++) {
            checkNeighbors(board, i, j);
        }
    }
    computeResult(board);
};

const checkNeighbors = function(board, row, col) {
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    let liveNeighbors = 0;

    for (let dir of dirs) {
        let r = row + dir[0];
        let c = col + dir[1];

        if (!checkBoundary(board, r, c)) continue;
        if (board[r][c] === 3 || board[r][c] === 1) liveNeighbors++;
    }

    if (board[row][col] === 0 && liveNeighbors === 3) {
        board[row][col] = 4;
    } else if (board[row][col] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
        board[row][col] = 3;
    }
}

const checkBoundary = function(board, row, col) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false;
    return true;
}

const computeResult = function (board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 3) {
                board[i][j] = 0;
            }
            if (board[i][j] === 4) {
                board[i][j] = 1;
            }
        }
    }
}