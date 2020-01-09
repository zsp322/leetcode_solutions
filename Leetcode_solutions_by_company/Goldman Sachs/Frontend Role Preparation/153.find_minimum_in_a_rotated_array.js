/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums == null || nums.length == 0) return Number.MIN_SAFE_INTEGER;

    let left = 0;
    let right = nums.length - 1;

    let res = Number.MAX_SAFE_INTEGER;

    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            res = Math.min(res, nums[mid]);
            right = mid;
        } else {
            res = Math.min(res, nums[left]);
            left = mid + 1;
        }
    }

    res = Math.min(res, nums[left], nums[right]);

    return res;

};