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
        int leftSum = mergeSumHelper(nums, 0, mid - 1);
        int rightSum = mergeSumHelper(nums, mid + 1, right);

        int middleSum = nums[mid];
        int leftPtr = mid - 1;
        while (leftPtr >= 0 && nums[leftPtr] > 0) {
            middleSum += nums[leftPtr];
        }
        int rightPtr = mid + 1;
        while (rightPtr < nums.length && nums[rightPtr] > 0) {
            middleSum += nums[rightPtr];
        }

        return Math.max(leftSum, rightSum, middleSum);
    }
}