// Date: 2019-11-21
// Tag: DP/Greedy
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.


// Solution: Dynamic Programming
// Time Complexity: O(n^2)
class Solution {
    public boolean canJump(int[] nums) {
        if (nums == null || nums.length == 0) return false;

        boolean[] dp = new boolean[nums.length];
        dp[0] = true;

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j <= nums[i]; j++) {
                int curIdx = i + j;
                if (curIdx < nums.length) dp[curIdx] = dp[i];  // Forget to add the edge case check
            }
        }

        return dp[nums.length - 1];
    }
}


// Solution: Dynamic Programming Top - Down
// Time Complexity: O(n^2)
// Space Complexity: O(n)

class Solution {
    public boolean canJump(int[] nums) {
        if (nums == null || nums.length == 0) return false;

        boolean[] dp = new boolean[nums.length];
        dp[dp.length - 1] = true;

        for (int i = nums.length - 2; i >= 0; i--) {
            for (int j = 0; j <= nums[i]; j++) {
                if (((j + i) < nums.length) && dp[j + i]) dp[i] = true;
            }
        }

        return dp[0];
    }
}

// Solution: Greedy -> Come from DP(Top-Down)
// Time Complexity: O(n)
// Space Complexity: O(1)

class Solution {
    public boolean canJump(int[] nums) {
        int lastPos = nums.length - 1;

        for (int i = nums.length - 2; i >= 0; i--) {
            if ((nums[i] + i) >= lastPos) lastPos = i;
        }

        return lastPos == 0;
    }
}