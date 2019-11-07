// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

/**
 * @param {number[]} nums
 * @return {number}
 */

 // O(1) space complexity -- 不能用hashset
 // read-only -- 不能排序

 // 呃，这道题才是我今天面times的题目，其实还是有点难度的嘛：）
var findDuplicate = function(nums) {
    if(nums === null) return nums;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums(i)) != i) return nums[i];  // 本质就是two pointer solution
    }
};


// 优化解法是跟linkedlist cycle II相连
// 这个时候可以复习下linkedlist cycle II
// 思路和142. linkedlist cycle II是一样的，唯一要注意的就是怎么用快慢指针遍历数组
var findDuplicate = function(nums) {
    if(nums === null) return nums;
    
    let slow = 0;
    let fast = 0;
    
    while (fast != nums.length && nums[fast] != nums.length) {
        slow = nums[slow];  // Move one position
        fast = nums[nums[fast]];  // Move two position
        if (slow === fast) {
            let newPtr = 0;
            while (newPtr != slow) {
                newPtr = nums[newPtr];
                slow = nums[slow];
            }
            return slow;
        }
    }
    return -1;
};