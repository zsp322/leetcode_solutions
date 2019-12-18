// 很巧妙的题目

class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        int longestStreak = 1;

        for (int i = 0; i < nums.length; i++) {
            // 精髓的地方
            if (!set.contains(nums[i] - 1)) {
                int curNum = nums[i];
                int streak = 1;

                while (set.contains(curNum + 1)) {
                    curNum++;
                    streak++;
                }

                longestStreak = Math.max(longestStreak, streak);
            }
        }

        return longestStreak;
    }
}