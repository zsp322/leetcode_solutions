/**
 * @param {number[]} nums
 * @return {boolean}
 *
 */
// 属于做一遍应该就能记得的题目,从终点往前探
// Greedy Algorithm (O(n))
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

// Dynamic Programming O(n^2)
var canJump = function(nums) {
    if (nums === null || nums.length === 0) return true;

    let mem = new Array(nums.length).fill(undefined);
    mem[mem.length - 1] = true;

    for (let i = nums.length - 2; i >= 0; i--) {
        let farthest = Math.min(nums[i] + i, nums.length - 1);

        for (let j = i; j <= farthest; j++) {
            if (mem[j]) {
                mem[i] = true;
                break;
            }
        }

    }
    return mem[0] === true;
}