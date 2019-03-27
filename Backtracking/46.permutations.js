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
