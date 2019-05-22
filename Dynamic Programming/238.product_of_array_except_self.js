/**
 * @param {number[]} nums
 * @return {number[]}
 */
// [1, 2, 3, 4] => [24, 12, 8, 6]
// Can't use divide
// 没什么思路，看discuss
// 这道题是做过的，但是已经忘记了，看了solution才回忆起来一点思路
// Naive Approach是keep left and right two arrays, three pass producing this two arrays which store the product on the left of this element
// or right of this element
// Time Complexity: O(n)
// Space Complexity: O(n)
var productExceptSelf = function(nums) {
    if (nums === null || nums.length === 0) return [];

    let left = new Array(nums.length);
    let right = new Array(nums.length);

    left[0] = 1;
    right[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

   
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(left[i] * right[i]);
    }

    return res;
};


// Follow up: Space Complexity: O(1)
// 应该是沿用上面的思路,然后把值存在output array里
var productExceptSelf = function(nums) {
    if (nums === null || nums.length === 0) return [];
    let res = new Array(nums.length)
    res[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    } // 1. 1. 2. 6
 
    let temp = 1; // Store the right product when it's passed from right
    for (let i = nums.length - 2; i >= 0; i--) {
        temp *=  nums[i + 1];
        res[i] *= temp;
    }
     
     return res
 }