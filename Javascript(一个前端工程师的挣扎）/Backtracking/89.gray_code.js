/**
 * Question 89. Gray Code
 * Solved Strategy: f(n) = f(n - 1) || 2^(n - 1) + f(n - 1)
 * Date: 10/24/2018
 * Description: Once realize what you need from the pattern, recursive is easy
 * JS Compiler in Leetcode is stupid because it doesn't clean the stuff
 *
 *
 *
 *
 *
 */


/**
 * @param {number} n
 * @return {number[]}
 */

var res = [];

var grayCode = function(n) {
    if (n < 0) return null; // edge case

    res = [];   //JS Compiler is stupid
    helper(n);

    //console.log(res);
    return res;
};

function helper(n) {
    if (n === 0) {
        res.push(0);
    }  else {
        helper(n - 1);   //get f(n - 1);

        for (let i = res.length - 1; i >= 0; i--) {
            res.push(Math.pow(2, n - 1) + res[i]);
        }
    }
}
