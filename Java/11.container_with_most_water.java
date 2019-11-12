// Date: 11/11/2019
// Tag: Two pointer
class Solution {
    public int maxArea(int[] height) {
        if (height == null || height.length == 0) return 0;
        int left = 0;
        int right = height.length - 1;
        int res = Integer.MIN_VALUE;

        while (left < right) {
            int leftBound = height[left];
            int rightBound = height[right];
            int area = Math.min(leftBound, rightBound) * (right - left);

            res = Math.max(area, res);

            if (leftBound > rightBound) {
                right--;
            } else {
                left++;
            }
        }
        return res;
    }
}