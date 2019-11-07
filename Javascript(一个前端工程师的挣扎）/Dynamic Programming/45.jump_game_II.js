// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Your goal is to reach the last index in the minimum number of jumps.
//
// Example:
//
// Input: [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.


/**
 * @param {number[]} nums
 * @return {number}
 */

// 呃，真是不敢相信自己居然做出来一道HARD的DP题目，不过思路还是蛮简单的，效率不是很高，看一下discuss的优化
var jump = function(nums) {
    if (nums === null) return null;
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= nums[i]; j++) {
            if ((i + j) >= nums.length) break;
            dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
        }
    }

    return dp[dp.length - 1];

};

// Greedy Algorithm/BFS SOLUTION
var jump = function(nums) {
    if (nums === null) return null;

    let curEnd = 0;
    let curFurthest = 0;
    let jumps = 0;

    // 这里有个小错误，最后一个INDEX不需要去CHECK
    for (let i = 0; i < nums.length; i++) {
        curFurthest = Math.max(curFurthest, i + nums[i]);

        if (i === curEnd) {
            jumps++;
            curEnd = curFurthest;
        }
    }

    return jumps;

};