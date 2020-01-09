/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m == 0 || n == 0 || m == null || n == null) return 0;

    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(1);
    }


    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

public class Solution {
    public int uniquePaths(int m, int n) {
    int[] arr = new int[m];
    for (int i = 0; i < m; i++) {
    arr[i] = 1;
}
for (int i = 1; i < n; i++) {
    for (int j = 1; j < m; j++) {
        arr[j] = arr[j] + arr[j-1];
    }
}
return arr[m-1];
}
}