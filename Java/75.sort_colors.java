// Date: 12-04-2019
// Tag: Two/Three Pointer
// Trick: 保留1所在的位置，去SWAP 0或者2, 并且在换0的时候要INCREMENT CURIDX
// [2, 0, 0, 1, 1, 2] => [0, 0, 1, ,1, 2, 2]

class Solution {
    public void sortColors(int[] nums) {
        if (nums == null || nums.length == 0) return;

        int p0 = 0;
        int p2 = nums.length - 1;
        int curNum = 0;

        while (curNum <= p2) {
            if (nums[curNum] == 0) {
                int temp = nums[curNum];
                nums[curNum] = nums[p0];
                nums[p0++] = temp;
            } else if (nums[curNum] == 2) {
                int temp = nums[curNum];
                nums[curNum] = nums[p2];
                nums[p2--] = temp;
            } else {
                curNum++;
            }
        }
    }
}