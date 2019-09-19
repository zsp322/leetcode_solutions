/**
 * @param {character[][]} grid
 * @return {number}
 */
// BFS写法
var numIslands = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) return 0;

    let visited = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));
    // console.log(visited)
    let numOfIslands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                bfsHelper(grid, visited, i, j);
                numOfIslands++;
            }
        }
    }
    return numOfIslands;
};

const bfsHelper = function (grid, visited, i ,j) {
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [];
    queue.push([i, j]);
    visited[i][j] = true;

    while (queue.length > 0) {
        let node = queue.shift();
        // console.log(node)
        visited[node[0]][node[1]] = true;

        for (let dir of dirs) {
            let newRow = node[0] + dir[0];
            let newCol = node[1] + dir[1];

            if (!checkValid(newRow, newCol, grid, visited)) continue;
            queue.push([newRow, newCol]);
        }
    }
}

const checkValid = function (row, col, grid, visited) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0' || visited[row][col]) return false;
    return true;
}

// DFS -- 略过不写了, TIME COMPLEXITY都是O(M * N)

// UNION FIND解法

