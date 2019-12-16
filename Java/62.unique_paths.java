// Date: 11-26-2019
// Tag: Dynamic Programming/Math

class Solution {
    public int uniquePaths(int m, int n) {
        if (m == 0 || n == 0) return 0;
        int[][] dp = new int[m][n];

        dp[0][0] = 1;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (valid(i - 1, j, dp)) dp[i][j] += dp[i - 1][j];
                if (valid(i, j - 1, dp)) dp[i][j] += dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];
    }

    public boolean valid(int row, int col, int[][] dp) {
        if (row < 0 || row >= dp.length || col < 0 || col >= dp[0].length) return false;
        return true;
    }
}

// Math Formula -> Combination(N, K) for referrence
public int uniquePaths(int m, int n) {
    double value = 1;
    // here we calculate the total possible path number
    // Combination(N, k) = n! / (k!(n - k)!)
    // reduce the numerator and denominator and get
    // C = ( (n - k + 1) * (n - k + 2) * ... * n ) / k!
    for (int i = 1; i <= n - 1; i++) {
        value *= ((double) (m + i - 1) / (double) i);
    }
    return (int) Math.round(value);
}