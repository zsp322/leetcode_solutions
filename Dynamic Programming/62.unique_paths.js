/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 一道小学数学题，居然也是DP思维，主要卡着的还是二维数组操作不流畅
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(null).map(() => new Array(n).fill(null));
    dp[0][0] = 0;

    dp[0].fill(1); // The first row is 1

    // First column is 1
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};