class Solution {
    public double findMaxAverage(int[] nums, int k) {
        int[] sum = new int[nums.length + 1];
        for (int i = 1; i <= nums.length; i++) {
            sum[i] = sum[i - 1] + nums[i - 1];
        }
        double max = -Double.MAX_VALUE;   // Double.MIN_VALUE is the smallest positive double value
        for (int i = 0; i + k <= nums.length; i++) {
            int j = i + k;
            max = Math.max(max, (sum[j] - sum[i]) * 1.0 / (j - i));
        }
        return max;
    }
}