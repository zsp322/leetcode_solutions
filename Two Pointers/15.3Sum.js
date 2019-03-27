/**
 * Question 15. 3Sum
 * Solved Strategy: Simple Number mainpulation
 * Date: 10/04/2018
 * Description: First time use javascript solve leetcode
 * Learn javascript sort is sort in alphabetic order
 */


/** Did it by converting java code in discuss
 *  to javascript solution
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */


threeSum([-1,0,1,2,-1,-4]);

var threeSum = function(nums) {

    if (nums == null) return null;

    nums.sort(function(a, b){return a - b});   // Interesting findings in javascript

    var res = [];
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;   // front
        let right = nums.length - 1;  // end


        if (i - 1 >= 0 && nums[i] === nums[i - 1]) continue;  // avoid duplicate

        while (left < right) {
            var sum = nums[left] + nums[right] + nums[i];

            var arr = [];
            if (sum === 0) {
                arr.push(nums[left]);
                arr.push(nums[i]);
                arr.push(nums[right]);
                res.push(arr);

                while (left + 1 < right && nums[left] === nums[left + 1]) left++;
                while (right - 1 > left && nums[right === nums[right - 1]]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

    }

    return res;

}