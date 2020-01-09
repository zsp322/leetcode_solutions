/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 说实话我的BINARY SEARCH不算掌握的很好，其实很多细节可以注意到的

var search = function(nums, target) {
    if (nums == null || nums.length == 0) return -1;

    let left = 0;
    let right = nums.length - 1;
    while (left + 1 < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < nums[right]) {
            if (nums[right] >= target
                && nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else {
            if (nums[left] <= target
                && nums[mid] > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
    }

    if (nums[left] == target) return left;
    if (nums[right] == target) return right;

    return -1;
};