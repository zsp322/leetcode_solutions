/**
 * @param {number[][]} grid
 * @return {number}
 */

// 犯了一点小错误，修改了以后逻辑是没什么问题的，跟64. UNIQUE_PATH解法是一样的
var minPathSum = function(grid) {
    if (grid === null) return 0;

    let dp = new Array(grid.length).fill(null).map(() => new Array(grid[0].length));

    dp[0][0] = grid[0][0];

    // Fill out the row
    for (let i = 1; i < grid[0].length; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }

    // Fill out the column
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }


    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};