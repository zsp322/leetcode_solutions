/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
// Note: The solution set must not contain duplicate subsets.
// DFS solution
var subsetsWithDup = function(nums) {
   nums.sort();
   let res = [];
   dfs(res, nums, [], 0);
   return res;
};

const dfs = function(res, nums, curPath, index) {
    if (curPath.length === nums.length) {
        res.push(curPath.slice(0, curPath.length));
        return;
    } else {
        res.push(curPath.slice(0, curPath.length));
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;  // 周氏去重
            curPath.push(nums[i]);
            dfs(res, nums, curPath, i + 1);
            curPath.pop();
        }
    }
}


// Iterative solution
var subsetsWithDup = function(nums) {
    nums.sort();
    let res = [[]];

    let size = 0;
    let startIdx = 0;


    for (let i = 0; i < nums.length; i++) {
        // 这两步很巧妙
        startIdx = (i >= 1 && nums[i] === nums[i - 1]) ? size : 0;
        size = res.length;

        for (let j = startIdx; j < nums.length; j++) {
            let subset = [...res[j]];
            subset.push(nums[i]);
            res.push(subset);
        }
    }
    return res;
};