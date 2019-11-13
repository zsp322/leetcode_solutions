class Solution {
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) return -1;
        int left = 0;
        int right = nums.length - 1;

        while (left + 1 < right) {
            int mid = (left + right) / 2;

            if (nums[mid] == target) return mid;
            // Left sorted
            if (nums[mid] > nums[left]) {
                if (target >= nums[left]) {
                    if (target < nums[mid]) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                } else {
                    left = mid + 1;
                }
            } else {
                // Right Sorted
                if (target <= nums[right]) {
                    if (target > nums[mid]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                } else {
                    right = mid - 1;
                }
            }
        }

        if (nums[left] == target) return left;
        if (nums[right] == target) return right;

        return -1;
    }
}