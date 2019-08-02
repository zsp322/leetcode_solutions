// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// KEY POINT: 对于每一个中点来说，总有一个半边是SORTED
var search = function(nums, target) {
    if (nums === null) return -1;
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {

        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;
        if (nums[low] === target) return low;
        if (nums[high] === target) return high;

        // Left side is sorted
        if (nums[mid] > nums[low]) {
            if (target > nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
            // Right side is sorted
        }  else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;


};
