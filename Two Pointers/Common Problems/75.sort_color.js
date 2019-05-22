// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Quick sort ? Merge Sort ? 
// 看了discuss，解法是将2往右送， 0往左送， 然后记住pivot position
var sortColors = function(nums) {
    if (nums === null) return nums;
    let second = nums.length - 1;
    let one = 0;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === 2 && i < second) {
            swap(nums, i, second);
            second--;
        }
        while (nums[i] === 0 && i > one) {
            swap(nums, i, one);
            one++;
        }
    }
    return nums;
};


const swap = function(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}