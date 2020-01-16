class Solution {
    public boolean canPartition(int[] nums) {
        if (nums == null || nums.length == 0) return false; // You can't divide an empty array

        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
        }

        sum /= 2;

        boolean[][] dp = new int[nums.length + 1][sum + 1];

        dp[0][0] = true;
        for (int i = 0; i < dp.length; i++) {
            dp[i][0] = true;
        }

        for (int i = 0; i < dp[0].length; i++)
            dp[0][i] = false;
        }

        for (int i = 1; i < dp.length; i++) {
            for (int j = 1; j < dp[0].length; j++) {
                dp[i][j] = dp[i - 1][j];
                if (j > nums[i]) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
                }
            }
        }
        return dp[n][sum];
    }
}