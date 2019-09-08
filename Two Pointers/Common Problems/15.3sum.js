/**
 * Question 15. 3Sum
 * Solved Strategy: Two Pointers
 * Date: 10/04/2018
 * // 抄答案的

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
// 3 Sum 应该是很简单的题目，但是还是有点卡壳，主要是怎么保证不DUPLICATE
// 一开始用的是TWO SUM的变种方式，发现并没有办法去重，该换双指针方法
// 需要二刷

var threeSum = function(nums) {
    if (nums === null || nums.length === 0) return [];
    let res = [];
    nums.sort(function(a, b) {return a - b;});  // After sort, it won't have duplicate triplets


    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i];
            if (sum === 0) {
                res.push([i, left, right]);

                while (left + 1 < right && nums[left + 1] === nums[left]) left++;
                while (right - 1 > left && nums[right - 1] === nums[right]) right--;

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