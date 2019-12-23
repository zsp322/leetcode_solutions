// Divide and conquer solution
// 效率有问题，每次左右比较的时候还要iterate SUB ARRAY两遍
// O（nlogn)
class Solution {
    public int majorityElement(int[] nums) {
        return helper(nums, 0, nums.length - 1);
    }
    public int countInRange(int[] nums, int num, int lo, int high) {
        int count = 0;
        for (int i = lo; i <= hi; i++) {
            if (nums[i] == num) count++;
        }
        return count;
    }
    public int helper(int[] nums, int lo, int hi) {
        if (lo == hi) {
            return nums[lo];
        }

        int mid = (hi + lo) / 2;
        int left = helper(nums, lo, mid);
        int right = helper(nums, mid + 1, hi);

        if (left == right) return left;

        int leftCount = countInRange(nums, left, lo, hi);
        int rightCount = countInRange(nums, right, lo, hi);

        return leftCount > rightCount ? left : right;
    }
}

// Boyer-Moore Voting Algorithm
class Solution {
    public int majorityElement(int[] nums) {
        int candidate = nums[0];
        int count = 1;
        for (int i = 1 ; i < nums.length; i++) {
            if (count == 0) {
                candidate = nums[i];
            }
            count += nums[i] == candidate ? 1 : -1;
        }
        return candidate;
    }
}