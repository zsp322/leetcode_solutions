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


// 二刷 8.29, contains only distinct elements
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums === null || nums.length === 0) return [];
    let res = [];
    dfs(res, nums, [], 0);
    return res;
};

const dfs = function(res, nums, curPath, index) {
    if (curPath.length === nums.length) {
        res.push(curPath.slice(0, curPath.length));
    } else {
        res.push(curPath.slice(0, curPath.length));  //Not sure how it handles empty bracket []
        for (let i = index; i < nums.length; i++) {
            curPath.push(nums[i]);
            dfs(res, nums, curPath, i + 1);
            curPath.pop();
        }
    }
}


// Iterative写法
var subsets = function (nums) {
    if (nums === null || nums.length === 0) return [];
    let res = [[]];

    for (let num of nums) {
        let size = res.length;

        for (let i = 0; i < size; i++) {
            let subSet = [...res[i]];
            subSet.push(num);
            res.push(subSet);
        }
    }
    return res;
}