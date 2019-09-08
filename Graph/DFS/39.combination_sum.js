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

// 三刷 8.28
// No duplicate element but allowed multiple usage of one element
var combinationSum = function(candidates, target) {
    if (candidates === null || candidates.length === 0) return [];

    // 如果答案是ascending order， 则在这里排个序较好
    let res = [];
    dfs(res, candidates, curPath, curSum, index, target);
    return res;
}

const dfs = function(res, candidates, curPath, curSum, index, target) {
    // Mistake made here is index doesn't have to be equal to candidates.length, it can stop any place
    if (index === candidates.length && curSum === target) {
        res.push(curPath);
    } else {
        let leftSum = target - curSum;
        // Don't forward the findings
        // Mistake here made is i = index + 1
        for (let i = index; i < candidates.length; i++) {
             if (nums[i] <= leftSum) {
                 curPath.push(candidates[i]);
                 dfs(res, candidates, curPath, curSum + nums[i], i, target);
                 curPath.pop()
             }
        }
    }
}