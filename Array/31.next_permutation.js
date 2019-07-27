/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//     Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//     If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//     The replacement must be in-place and use only constant extra memory.
//     Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
//
//     1,2,3 → 1,3,2
//     3,2,1 → 1,2,3
//     1,1,5 → 1,5,1
    //     In place and const space, means no array of lexigiocal array
var nextPermutation = function(nums) {
    if (nums === null || nums.length === 0) return nums;

    let i = nums.length - 1;

    while (i > 0 && nums[i - 1] >= nums[i]) {
        i--;
    }

    if (i > 0) {
      let j = nums.length - 1;
      while (j >= i) {
          if (nums[j] > nums[i  - 1]) break;
          // Because from i to end of array, the array is sorted as descending order
          j--;
      }

      swap(nums, i - 1, j);
      reverseSort(nums, i, nums.length - 1);
    } else {
      reverseSort(nums, 0, nums.length - 1);
    }
    return nums;
};

const swap = function(nums, i, j) {
   const temp = nums[i];
   nums[i] = nums[j];
   nums[j] = temp;
}

const reverseSort = function(nums, i, j) {
   // console.log(nums)
   while (i < j) {
       swap(nums, i++, j--);
   }
}


// 二刷, 可能是最近才做过的，思路还蛮清楚的
// 再过一段时间再回来看，THREE STEPS的PATTERN还是蛮清晰的

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums === null || nums.length === 0) return [];


    let i = nums.length - 1;

    while (i > 0 && nums[i - 1] > nums[i]) {
        i--;
    }

    if (i > 0) {
        let j = nums.length - 1;

        while (j >= 0) {
            if (nums[j] > nums[i - 1]) break;
            j--;
        }
        swap(nums, i - 1, j);
        reverseSort(nums, i, nums.length - 1)
    } else {
        reverseSort(nums, 0, nums.length - 1);
    }
};


const swap = function(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const reverseSort2(nums, i, j) {
    if (i > j) return nums;

    while (i < j) {
        swap(nums, i++, j--);
    }
}