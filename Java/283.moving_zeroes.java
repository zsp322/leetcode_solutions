// Instead of moving zeroes to the end of list
// We can move all non-zero numbers to the front
public void moveZeroes(int[] nums) {
    if (nums == null || nums.length == 0) return;

    int leftMostZeroIndex = 0;

    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (i > leftMostZeroIndex) {
                nums[leftMostZeroIndex] = nums[i];
                nums[i] = 0;
            }
            leftMostZeroIndex++;
        }
    }
}