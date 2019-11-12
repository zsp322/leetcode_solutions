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

        // Guarantee m < n
        int left = 0;
        int right = nums1.length;
        int halfLength = (m + n + 1) / 2;

        while (left <= right) {
            int partitionX = (left + right) / 2;
            int partitionY = halfLength - partitionX;

            if (partitionX > left && nums1[partitionX - 1] > nums2[partitionY]) {
                right = partitionX - 1;
            } else if (partitionX < right && nums2[partitionY - 1] > nums1[partitionX]) {
                left = partitionX + 1;
            } else {
                int maxLeft = 0;
                if (partitionX == 0) {
                    maxLeft = nums2[partitionY - 1];
                } else if (partitionY == 0) {
                    maxLeft = nums1[partitionX - 1];
                } else {
                    maxLeft = Math.max(nums1[partitionX - 1], nums2[partitionY - 1]);
                }

                if ( (m + n) % 2 == 1 ) { return maxLeft; }

                int minRight = 0;
                if (partitionX == m) {
                    minRight = nums2[partitionY];
                } else if (partitionY == n) {
                    minRight = nums1[partitionX];
                } else {
                    minRight = Math.min(nums1[partitionX], nums2[partitionY]);
                }

                return (maxLeft + minRight) / 2.0;
            }
        }

        return 0.0;
    }
}