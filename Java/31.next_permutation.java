class Solution {
    public void nextPermutation(int[] nums) {
        if (nums == null || nums.length == 0) return;

         int swappedIndex = -1;
        // Find out the first index breaks the pattern
        for (int i = nums.length - 2; i >= 0; i--) {
            if (nums[i] >= nums[i + 1]) continue;
            else {
                swappedIndex = i;
                break;
            }
        }

        // System.out.println("The swap " + swappedIndex);
        if (swappedIndex == -1)  {
            reverse(nums, 0, nums.length - 1);
            return;
        }

        // Swap the smallest number which is bigger than the index
        for (int i = nums.length - 1; i > swappedIndex; i--) {
            if (nums[i] > nums[swappedIndex]) {
                swap(nums, swappedIndex, i);
                break;
            }
        }

        reverse(nums, swappedIndex + 1, nums.length - 1);
    }


    public void reverse(int[] nums, int start, int end) {
        while (start <= end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    public void swap(int[] nums, int index1, int index2) {
            int temp = nums[index1];
            nums[index1] = nums[index2];
            nums[index2] = temp;
    }
}
