/**
 * @param {number[]} height
 * @return {number}
 */

// tag: Two Pointer
// Diffculty: Medium
// 去年10月份做的，模模糊糊有点印象，但自己没有写出来，这次又是看discuss的
// 其实中心思想就是对于双指针从头/尾开始，i and j, if (height[i] < height[j]) 对于fixed i, 一定是最大的area,因为不论j怎么移动（向前移), 宽度只会减小，高度<+height[i]
// 找一找这道题和什么别的题目相连

var maxArea = function(height) {
    if (height === 0) return 0;

    let i = 0;
    let j = height.length - 1;
    let res = Number.MIN_SAFE_INTEGER;
    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i + 1);
        let res = area > res ? area : res; 
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return res;
};