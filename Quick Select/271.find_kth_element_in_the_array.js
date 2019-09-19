/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Quick Select的解法
var findKthLargest = function(nums, k) {
    if (nums === null || nums.length === 0) return null;

    return partitionArray(nums, nums.length - k, 0, nums.length - 1);

};

const partitionArray = function(nums, k, start, end) {
    if (start >= end) return nums[k];

    let left = start;
    let right = end;
    let pivot = nums[Math.floor((start + end) / 2)];

    while (left <= right) {
        while (left <= right && nums[left] < pivot) left++;
        while (left <= right && nums[right] > pivot) right--;

        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }
    if (k <= right) return partitionArray(nums, k, start, right);
    if (k >= left) return partitionArray(nums, k, left, end);

    return nums[k];
}



// 二刷

const partitionArray2 = function(nums, k, start, end) {
    // finsih stage
    if (start >= end) return nums[k];

    let mid = Math.floor((start + end) / 2);
    let pivot = nums[mid];
    let left = start;
    let right = end;

    while (left <= right) {
        while (left <= right && nums[left] < pivot) left++; // Smaller than pivot value
        while (left <= right && nums[right] > pivot) right--; // Bigger than pivot value

        if (left <= right) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;

            left++;
            right--;
        }
    }


    if (k <= right) return partitionArray(nums, k, start, right);
    if (k >= left) return partitionArray(nums, k, left, end);
    return nums[k];
}