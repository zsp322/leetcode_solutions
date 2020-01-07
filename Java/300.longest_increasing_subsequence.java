// O(N^2)
class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int[] dp = new int[nums.length + 1];
        dp[0] = 1;
        int longestSeq = 1;
        for (int i = 0; i < nums.length; i++) {
            int curNum = nums[i];
            dp[i] = 1;
            // 一开始这里漏了，后来想了下，如果这个数是LOCAL最小值，则应该DEFAULT成1
            // 这属于重大NON-BUGFREE
            for (int j = i; j >= 0; j--) {
                if (curNum > nums[j]) {
                    dp[i] = Math.max(dp[j] + 1, dp[i]);
                }
            }
            longestSeq = Math.max(longestSeq, dp[i]);
        }
        return longestSeq;
    }
}

// O(NlogN）
// 想到用MAX-HEAP存遍历值，当当前值小于顶端值，则POP出HEAP中比当前值小的值
// Binary Search -- 想出这个SOLUTION的人真是神人
// 这里怎么判断LEFT/RIGHT POINTER的值理不清楚
class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int[] tails = new int[nums.length];
        int size = 0;

        for (int num : nums) {
            int left = 0;
            int right = size;

            while (left != right) {
                int m = (left + right) / 2;
                if (tails[m] < num) {
                    left = m + 1;
                } else {
                    right = m;
                }
            }
            tails[left] = num;
            if (left == size) size++;
        }

        return size;
    }
}