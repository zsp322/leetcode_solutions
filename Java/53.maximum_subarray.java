// Date: 11-18-2019
// Tag: Dynamic Programming
// dp[i] represents the maximum value contains this element
// DP + greedy (其实我写的这个DP就是空间复杂版的greedy思想）
class Solution {
    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        int res = dp[0];

        for (int i = 1; i < nums.length; i++) {
            dp[i] = dp[i - 1] < 0 ? nums[i] : nums[i] + dp[i - 1];
            res = Math.max(dp[i], res);
        }
        return res;
    }
}


// Tag: Divide + Conquer
class Solution {
    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        return mergeSumHelper(nums, 0, nums.length - 1);
    }

    public int mergeSumHelper(int[] nums, int left, int right) {
        if (left == right) return nums[left];

        int mid = (left + right) / 2;
        // 这里的left，mid只是个边界，选择left到mid可以返回单一element
        int leftSum = mergeSumHelper(nums, left, mid);
        int rightSum = mergeSumHelper(nums, mid + 1, right);
        int crossSum = crossSum(nums, left, right, p);

        return Math.max(Math.max(leftSum, rightSum), crossSum);
    }
    public int crossSum(int[] nums, int left, int right, int p) {
        // if (left == right) return nums[left];
        int leftSum = Integer.MIN_VALUE;
        int curSum = 0;

        for (int i = p; i >= left; i--) {
            curSum += nums[i];
            leftSum = Math.max(leftSum, curSum);
        }

        int rightSum = Integer.MIN_VALUE;
        curSum = 0;

        for (int i = p + 1; i <= right; i++) {
            curSum += nums[i];
            rightSum = Math.max(rightSum, curSum);
        }

        return leftSum + rightSum;
    }
}