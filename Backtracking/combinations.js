/**
 * Question 77. Combinations
 * Solved  Standard Perumutaion Recursive
 * Date: 10/22/2018
 * Description: Easy solved by the template and pattern
 *
 *
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if (n < 1 || k <= 0) return null;

    var res = [];

    dfs(n, k, 1, [], res);

    return res;
};


function dfs(n, k, curIndex, curCombo, res) {
    if (curCombo.length == k) {
        //console.log(curCombo); //for testing
        res.push(curCombo.slice(0, curCombo.length));
    } else {
        for (let i = curIndex; i <= n; i++) {
            curCombo.push(i);
            dfs(n, k, i + 1, curCombo, res);
            curCombo.pop();
        }
    }
}