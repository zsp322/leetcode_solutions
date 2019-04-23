// 做完238回来看的题目，discuss里说这两题有思维上的联系
// 多复习，多找题目之间的联系
// dp解法其实就是two-way pass，produce maxHeight to left/right, 对于每一个cell, 其储水量为min(maxRight, maxLeft) - height[cell undex]
// 这是trapping water的其中一种解法，最好理解的一种解法
// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
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