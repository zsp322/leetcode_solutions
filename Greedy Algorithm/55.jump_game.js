/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
// 属于做一遍应该就能记得的题目,从终点往前探

var canJump = function(nums) {
    if (nums === null) return true;

    let lastSuccessfulIndex = nums.length - 1;

    for (let i = lastSuccessfulIndex; i>= 0; i--) {
        if (nums[i] + i >= lastSuccessfulIndex) {
            lastSuccessfulIndex = i;
        }
    }

    return lastSuccessfulIndex === 0;
};