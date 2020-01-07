class Solution {
    public int maxProduct(int[] nums) {
        if (nums == null) return 0;
        int[][] dp = new int[nums.length][2];
        dp[nums.length - 1][0] = nums[nums.length - 1];
        dp[nums.length - 1][1] = nums[nums.length - 1];
        int maxValue = nums[nums.length - 1];

        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] == 0) {
                dp[i][0] = 0;
                dp[i][1] = 0;
            } else if (nums[i] > 0) {
                dp[i][0] = Math.max(dp[i + 1][0] * nums[i], nums[i]);
                dp[i][1] = dp[i + 1][1] * nums[i];
            } else {
                dp[i][0] = dp[i + 1][1] * nums[i];
                dp[i][1] = Math.min(dp[i + 1][0] * nums[i], nums[i]);
            }

            maxValue = Math.max(maxValue, dp[i][0]);
        }

        return maxValue;
    }
}

class Solution {
    public int maxProduct(int[] nums) {
        int res = nums[0];

        for (int i = 1, postiveMax = res, negativeMax = res; i < nums.length; i++) {
            if (nums[i] < 0) {
                int temp = postiveMax;
                postiveMax = negativeMax;
                negativeMax = temp;
            }

            postiveMax = Math.max(nums[i], nums[i] * postiveMax);
            negativeMax = Math.min(nums[i], nums[i] * negativeMax);
            res = Math.max(res, postiveMax);
        }

        return res;
    }
}
