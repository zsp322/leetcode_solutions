// 做完238回来看的题目，discuss里说这两题有思维上的联系
// 多复习，多找题目之间的联系
// Two-way pass，and produce maxHeight to left/right, 对于每一个cell, 其储水量为min(maxRight, maxLeft) - height[cell index]
// 这是trapping water的其中一种解法，最好理解的一种解法
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
//
// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!
// Example:
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
var trap = function(height) {
    if (height === null || height.length === 0) return 0;

    let left = new Array(height.length);
    let right = new Array(height.length);

    left[0] = 0;
    for (let i = 1; i < left.length; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    right[height.length - 1] = 0;

    for (let i = height.length - 2; i >= 0; i--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
    }

    
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        if (Math.min(left[i], right[i]) > height[i]) {
            res += Math.min(left[i], right[i]) - height[i]   
        }
    }

    return res;
};




// 二刷，看了自己原来的解法(Discuss解法）
var trap = function(height) {
    if (height === null || height.length === 0) return 0;
    let left = new Array(height.length); // Array store the max height from this point to rightmost side
    let right = new Array(height.length); // Array store the max height from this point to leftmost side


    left[0] = 0;
    for (let i = 1; i < left.length; i++) {
        left[i] = Math.max(left[i - 1], height[i - 1]);
    }

    right[height.length - 1] = 0;
    for (let j = height.length - 2; j >= 0; j--) {
        right[i] = Math.max(right[i + 1], height[i + 1]);
    }

    let res = 0;
    for (let i = 0; i < height.length; i++) {
        if (Math.min(left[i], right[i]) > height[i]) {
            res += Math.min(left[i], right[i]) - height[i];
        }
    }
    return res;

}

// Discuss上一种更精简的SOLUTION,其IDEA和上面的解法是一样的,希望下次自己做的时候可以想到这个解法
var trap = function(height) {
    if (height === null || height.length === 0) return height;
    let left = 0;
    let right = nums.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let res = 0;
    while (left <= right) {
        if (nums[left] <= nums[right]) {
            if (maxLeft < nums[left]) {
                maxLeft = nums[left];
            } else {
                res += maxLeft - nums[left];
            }
            left++;
        } else {
            if (maxRight < nums[right]) {
                maxRight = nums[right];
            } else {
                res += maxRight - nums[right];
            }
            right--;
        }
    }

    return res;
}