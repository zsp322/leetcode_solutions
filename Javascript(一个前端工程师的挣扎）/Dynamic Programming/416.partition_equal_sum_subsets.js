/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    if (sum % 2 === 1) return false;
    sum /= 2;

    let dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    for (let num of nums) {
        for (let i = sum; i > 0; i--) {
            if (i >= num) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
    }

    return dp[sum];
};