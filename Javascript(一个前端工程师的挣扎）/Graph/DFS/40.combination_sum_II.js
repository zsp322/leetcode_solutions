var combinationSum2 = function(candidates, target) {
    if (candidates === null || candidates.length === 0) return [];

    candidates.sort();
    // 如果答案是ascending order， 则在这里排个序较好
    let res = [];
    dfs(res, candidates, [], 0, 0, target);
    return res;
}

const dfs = function(res, candidates, curPath, curSum, index, target) {
    // Mistake made here is index doesn't have to be equal to candidates.length, it can stop any place
    if (curSum === target) {
        res.push([...curPath]);
    } else {
        let leftSum = target - curSum;
        // Don't forward the findings
        // Mistake here made is i = index + 1
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= leftSum) {
                if (i > index && candidates[i] === candidates[i - 1]) continue;
                curPath.push(candidates[i]);
                dfs(res, candidates, curPath, curSum + candidates[i], i + 1, target);
                curPath.pop()
            }
        }
    }
};