// Partitioning Algorithm
class Solution {
    public int findKthLargest(int[] nums, int k) {
        if (nums == null || nums.length == 0) return 0;
        return partitionHelper(nums, 0, nums.length - 1, nums.length - k);
    }

    public int partitionHelper(int[] nums, int left, int right, int k) {
        if (left >= right) return nums[k];

        int originalLeft = left;
        int originalRight = right;

        int index = (left + right) / 2;
        int pivotVal = nums[index];

        while (left <= right) {
            while (left <= right && nums[left] < pivotVal) left++;
            while (left <= right && nums[right] > pivotVal) right--;

            if (left <= right) {
                int temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;

                left++;
                right--;
            }
        }

        if (k <= right) return partitionHelper(nums, originalLeft, right, k);
        if (k >= left) return partitionHelper(nums, left, originalRight, k);

        return nums[k];
    }
}