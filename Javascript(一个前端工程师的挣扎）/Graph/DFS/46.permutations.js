/**
 * Question 46. Permutations
 * Solved Strategy: Basic Permutations
 * Date: 10/15/2018
 * Description: U need to use slice() capture array and then push it into array
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums == null) return null;

    var res = [];

    dfs(res, [], nums);

    return res;
};


function dfs(res, curCombo, nums) {
    if (curCombo.length == nums.length) {
        res = res.push(curCombo.slice(0, curCombo.length));

    } else {
        for (let i = 0; i < nums.length; i++) {
            if (curCombo.includes(nums[i])) continue;
            curCombo.push(nums[i]);
            dfs(res, curCombo, nums);
            curCombo.pop();  //remove last character

        }
    }
}

//二刷 8.29
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    dfs(res, nums, [], nums);
    return res;
};

const dfs = function(res, nums, curPath) {
   if (curPath.length === nums.length) {
       res.push(curPath.slice(0, curPath.length));
       return;
   } else {
       for (let i = 0; i < nums.length; i++) {
           if (curPath.includes(nums[i])) continue;
           curPath.push(nums[i]);
           dfs(res, nums, curPath);
           curPath.pop();
       }
   }
}

// 看了九章的答案，更喜欢这个visited array的方法
var permute = function(nums) {
    let res = [];
    let visited = new Array(nums.length).fill(false);
    dfs(res, nums, []INR, visited);
    return res;
};

const dfs = function(res, nums, curPath, visited) {
    if (curPath.length === nums.length) {
        res.push(curPath.slice(0, curPath.length));
        return;
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (visited[i]) continue;
            curPath.push(nums[i]);
            visited[i] = true;
            dfs(res, nums, curPath);
            visited[i] = false;
            curPath.pop();
        }
    }
}