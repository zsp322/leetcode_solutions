// OPTIMAL SOLUTION
// -> 从左向右找最后一个比前面最大值小的最后index -> right boundary
// -> 从右向左找最后一个比后面最小值大的最后index -> left boundary
// 最后处理的时候要对ARRAY已经sorted和只有一个element的情况进行讨论

class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        int rightBoundary = 0;
        int leftBoundary = nums.length - 1;
        for (int i = 0; i < nums.length; i++) {
            max = Math.max(max, nums[i]);
            min = Math.min(min, nums[nums.length - i - 1]);

            if (nums[i] < max) {
                rightBoundary = i;
            }
            if (nums[nums.length - i - 1] > min) {
                leftBoundary = nums.length - i - 1;
            }
        }

        return rightBoundary - leftBoundary <= 0 ? 0 : rightBoundary - leftBoundary + 1;
    }
}