/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 跟283.moving zeroes一个思想
var removeElement = function(nums, val) {
    if (nums === null || nums.length === 0) return nums;
    
    let slow = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[slow++] = nums[i];
        }
    }
    
    const res = nums.slice(0, slow);
    return res.length;

};