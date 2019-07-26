// 自己解出的最优解，代码有点繁琐，可能以后可以简化一下
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (matrix === null || matrix.length === 0) return [];
    
    let pacific = Array.from(Array(matrix.length), _ => Array(matrix[0].length).fill(false));
    let atlantic = Array.from(Array(matrix.length), _ => Array(matrix[0].length).fill(false));
    let m = matrix.length;  // Row Nums
    let n = matrix[0].length; // Col Nums
    let queue = [];
    
    for (let i = 0; i < n; i++) {
        queue.push([0, i]);
    } // Push Top Row
    
    for (let i = 1; i < m; i++) {
        queue.push([i, 0]);
    } // Left Col
    
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while (queue.length) {
        let cur = queue.shift();
        let r = cur[0];
        let c = cur[1];
        pacific[r][c] = true;
        
        for (let i = 0; i < dirs.length; i++) {
            let row = r + dirs[i][0];
            let col = c + dirs[i][1];
            
            if (row < 0 || row >= m || col < 0 || col >= n || pacific[row][col] 
               || matrix[row][col] < matrix[r][c]) continue;
            queue.push([row, col]);
        }   
    }
    
    queue = [];
    
    visited = Array.from(Array(matrix.length), _ => Array(matrix[0].length).fill(false));
    
    for (let i = 0; i < n; i++) {
        queue.push([m - 1, i]);
    }
    // Push Bottom Row
    
    for (let i = 0; i < m - 1; i++) {
        queue.push([i, n - 1]);
    }
    // Push Right col
    
     while (queue.length) {
        let cur = queue.shift();
        let r = cur[0];
        let c = cur[1];
        atlantic[r][c] = true;
        
        for (let i = 0; i < dirs.length; i++) {
            let row = r + dirs[i][0];
            let col = c + dirs[i][1];
            
            if (row < 0 || row >= m || col < 0 || col >= n || atlantic[row][col] 
               || matrix[row][col] < matrix[r][c]) continue;
            queue.push([row, col]);
        }   
    }
    
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (atlantic[i][j] && pacific[i][j]) res.push([i, j]);
        }
    }
    
    // console.log(res);
    
    return res;
    
  
};