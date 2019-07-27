// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// 感觉还是蛮明显的DP题目的，但是提示说这是个divide and conquer问题，看看discuss
var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;

    let dp = new Array(nums.length);
    dp[nums.length - 1] = nums[nums.length - 1];

    let res = nums[nums.length - 1];
    for (let j = nums.length - 2; j >= 0; j--) {
        dp[j] = Math.max(nums[j], nums[j] + dp[j + 1]);
        res = Math.max(res, dp[j]);
    }

    return res;
};


// Divide and Conquer的思路还蛮有意思的，理解了以后还是蛮好写的，但是要复习，因为CODE里面有的细节是看别人的代码写的
var maxSubArray = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    return maxSubArrayHelper(nums, 0, nums.length - 1);
}


const maxSubArrayHelper = function(nums, left, right) {
    if (left === right) return nums[left];

    let mid = Math.floor((left + right) / 2);

    let leftSubArray = maxSubArrayHelper(nums, left, mid);
    let rightSubArray = maxSubArrayHelper(nums, mid + 1, right);

    let temp = 0;

    let leftMax = nums[mid];
    let rightMax = nums[mid + 1];

    for (let i = mid + 1; i <= right; i++) {
        temp += nums[i];
        if (temp > rightMax) rightmax = temp;
    }

    temp = 0;
    for (let i = mid; i >= left; i--) {
        temp += nums[i];
        if (temp > leftMax) leftMax = temp;
    }
    return Math.max(Math.max(leftSubArray, rightSubArray), (leftMax + rightMax));
}