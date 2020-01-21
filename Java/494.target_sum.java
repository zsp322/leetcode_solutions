// top-bottom solution
class Solution {
    int res = 0;
    public int findTargetSumWays(int[] nums, int S) {
        int[][] cache = new int[nums.length][2001]; //first cell represents index, second cell represents sum
        for (int[] row : cache) {
            Arrays.fill(row, Integer.MIN_VALUE);
        }
        return dfsHelper(cache, 0, 0, S, nums);
    }

    public int dfsHelper(int[][] cache, int index, int curSum, int S, int[] nums) {
        if (index == nums.length) {
            if (curSum == S) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (cache[index][curSum + 1000] != Integer.MIN_VALUE) {
                return cache[index][curSum + 1000];
            }
            int add = dfsHelper(cache, index + 1, curSum + nums[index], S, nums);
            int substract = dfsHelper(cache, index + 1, curSum - nums[index], S, nums);

            cache[index][curSum + 1000] = add + substract;
            return cache[index][curSum + 1000];
        }
    }
}

// Bottom-up solution
// This solution only works if the range of sum is from -1000 to 1000
class Solution {
    public int findTargetSumWays(int[] nums, int S) {
        int[][] dp = new int[nums.length][2001];
        dp[0][nums[0] + 1000] = 1;
        dp[0][-nums[0] + 1000] += 1;

        for (int i = 1; i < nums.length; i++) {
            for (int sum = -1000; sum <= 1000; sum++) {
                if (dp[i - 1][sum + 1000] > 0) {
                    dp[i][sum + nums[i] + 1000] += dp[i - 1][sum + 1000];
                    dp[i][sum - nums[i] + 1000] += dp[i - 1][sum + 1000];
                }
            }
        }

        return S > 1000 ? 0 : dp[nums.length - 1][S + 1000];
    }
}
