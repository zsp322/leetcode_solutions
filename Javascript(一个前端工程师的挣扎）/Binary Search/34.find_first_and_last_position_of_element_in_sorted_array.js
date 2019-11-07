// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
//
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    if (nums === null) return [-1, -1];
    let res = new Array(2);
    res[0] = -1;
    res[1] = -1;
    findFirstOccurency(nums, target, res);
    findLastOccurency(nums, target, res);
    return res;
};



const findFirstOccurency = function (nums, target, res) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        if (nums[mid] === target) res[0] = mid;
    }
}


const findFirstOccurency = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return nums[start] === target ? start : end;
}
const findLastOccurency = function () {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        if (nums[mid] === target) res[1] = mid;
    }
}