/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]

// Output: [1,3,12,0,0]

// 心得: 利用two pointer，保证慢指针前面都是非0数

var moveZeroes = function(nums) {
    if (nums === null) return nums;

    let slow = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[slow++] = nums[i]
        }
    }

    for (let i = slow; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};


