// Date: 11-08-2019
// Tag: Binary Search最难题
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            int[] temp = nums1;
            nums1 = nums2;
            nums2 = temp;
        }

        int m = nums1.length;
        int n = nums2.length;

        int left = 0;
        int right = nums1.length - 1;

        while (left <= right) {
            int mid = Math.floor((left + right) / 2);
            int partitionX = mid - left + 1;
            int partitionY = Math.floor((m + n) / 2) - partitionX;

            int leftMax1 = nums[mid];
            int leftMax2 = nums[partitionY - 1];
            int leftMax = Math.max(leftMax1, leftMax2);

            int rightMin1 = nums[mid - 1]; // How to handle ege case
            int rightMin2 = nums[partitionY];
            int rightMin = Math.min(rightMin1, rightMin2);

            if (leftMax < rightMin) {
                if (paritionX == partitionY) {
                    return (rightMax + leftMax) / 2.0;
                } else {
                    return leftMax;
                }
            } else {
                if (leftMax1 > rightMin2) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }

        return 0;
}