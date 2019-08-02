/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

//
// Input: candidates = [2,3,6,7], target = 7,
//     A solution set is:
//     [
//         [7],
//         [2,2,3]
//     ]

// 很简单的backtrack的题目
var combinationSum = function(candidates, target) {
    if (candidates === null || candidates.length === 0) return [];
    candidates.sort(); // Make sure in ascending order

    let res = [];
    dfsHelper(res, candidates, target, [], 0, 0);
    return res;
};

const dfsHelper = function(res, candidates, target, curPath, sum, curIndex) {
    if (sum === target) {
        res.push(curPath.slice(0, curPath.length));
        return;
    } else {
        for (let i = curIndex; i < candidates.length; i++) {
            if (sum + candidates[i] <= target) {
                curPath.push(candidates[i]);
                dfsHelper(res, candidates, target, curPath, sum + candidates[i], i);
                curPath.pop();
            }
        }
    }
}


// 二刷
var combinationSum = function(candidates, target) {
    if (candidates === null) return [];
    let res = [];

    dfsHelper(res, candidates, target, [], 0, 0);
    return res;
};


const dfsHelper = function(res, candidates, target, curPath, curSum, curIdx) {
    if (curSum > target) return; //Since there is no negative number

    if (curSum === target) {
        res.push(curPath.slice(0, curPath.length));
    } else {
        let leftSum = target - curSum;
        for (let i = curIdx; i < candidates.length; i++) {
            if (candidates[i] < leftSum) {
                curPath.push(candidates[i]);
                dfsHelper(res, candidates, target, curPath, curSum + candidates[i], curIdx + 1);
                curPath.pop();
            }
        }
    }
}