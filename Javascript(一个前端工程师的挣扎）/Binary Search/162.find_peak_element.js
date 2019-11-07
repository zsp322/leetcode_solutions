// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums === null) return -1;
    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);
        // Find out the peak
        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

        // Usual case
        if (nums[mid] < nums[mid + 1]) {
            start = mid; // Doesn't matter where u go if u're on the bottom
        } else if (nums[mid] > nums[mid + 1]) {
            end = mid;
        }
    }

    return nums[start] > nums[end] ? start : end;
};