/**
 * Question 78. Subsets
 * Solved Strategy: Since it's started from sequential, we can pass the index to next level so that it won't
 * go back to exisiting number
 * Date: 10/22/2018
 * Description: Solved by myself with a little bit bugs fixing on passing index to next level
 *
 *
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums == null) return nums;

    var res = [];

    res.push([]);

    dfs(nums, res, [], 0);


    return res;
};


function dfs(nums, res, curCombo, curIndex) {
    for (let i = curIndex ; i < nums.length; i++) {
        curCombo.push(nums[i]);
        //console.log(curCombo);
        res.push(curCombo.slice(0, curCombo.length));

        dfs(nums, res, curCombo, i + 1);

        curCombo.pop();

    }
}
