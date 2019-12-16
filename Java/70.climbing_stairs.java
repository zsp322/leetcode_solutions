class Solution {
    public int climbStairs(int n) {
        if (n == 0) return 0;
        int[] dp = new int[n + 1];

        dp[0] = 1;
        dp[1] = 1;
        // 稍微注意下这里原来定义了DP[2] = 2， 忽略了test case可能是1的情况
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }


        return dp[n];
    }
}