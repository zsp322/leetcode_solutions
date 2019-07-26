// 这道题做的很不好，其实本质和01 Matrix是一样的，但是犯了以下两个错误
// 1. 错误判断应该要用dfs
// 2. 在判断要不要enqueue的时候，错误判断了边界条件，即应该跳过距离更短的node(已经被标注离其他的gate更近的点)，究其原因是我觉得也许这个node离其他gate更近，但这个node相连的node可能
// 存在有gate的情况下，离这个新node更近
// 需要总结一下这类题，即从要到达的地点开始bfs，更新所有matrix上的点
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

 // BFS
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if (rooms === null) return;
    
    let queue = [];
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    } 

    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    while (queue.length) {
        let cur = queue.shift();

        let row = cur[0];
        let col = cur[1];

        for (let i = 0; i < dirs.length; i++) {
            let newRow = row + dirs[i][0];
            let newCol = col + dirs[i][1];

            

            if (newRow < 0 || newRow >= rooms.length || newCol < 0 || newCol >= rooms[0].length 
                || rooms[newRow][newCol] == -1
                || rooms[newRow][newCol] <= rooms[row][col] + 1 ) continue;

            queue.push([newRow, newCol]);

            rooms[newRow][newCol] = rooms[row][col] + 1;
        }
        
    }
};