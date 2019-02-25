/**
 * Question 47. Permutations II
 * Solved Strategy: Basic Permutations with duplicate numbers
 * Date: 10/15/2018
 * Description: U need to use slice() capture array and then push it into array
 * The key is to handle the duplicate
 */

var permuteUnique = function(nums) {
    if (nums == null) return null;

    let visited = new Array(nums.length).fill(false);

    nums.sort(function(a, b) {
        return a - b;
    });

    var res = [];
    dfs(nums, visited, [], res);

    return res;

};


function dfs(nums, visited, curCombo, res) {
    if (curCombo.length == nums.length) {
        res.push(curCombo.slice(0, curCombo.length));
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) continue;

            // Avoid duplicate and duplicate traversing

            visited[i] = true;
            curCombo.push(nums[i]);

            dfs(nums, visited, curCombo, res);

            visited[i] = false;
            curCombo.pop();
        }
    }
}