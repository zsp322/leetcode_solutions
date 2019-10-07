/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

// DFS with memorization
// 看discuss写的题目
var wordBreak = function(s, wordDict) {
    if (s === null || s === '') return [];

    let dic = new Set(wordDict);
    let map = new Map();

    return dfsHelper(s, dic, map, 0);

};

const dfsHelper = function (s, dic, map, curIdx) {
    if (map.has(curIdx)) return map.get(curIdx); // Since it's already visited

    let res = []; //The list needs to be returned;

    if (curIdx === s.length) res.push("");

    for (let i = curIdx; i <= s.length; i++) {
        let word = s.substring(curIdx, i);

        if (dic.has(word)) {
            let list = dfsHelper(s, dic, map, i);

            for (let l of list) {
                res.push(word + (l === '' ? '' : " ") + l);
            }
        }
    }

    map.set(curIdx, res);
    return res;
}

// DP SOLUTION -- TIMEOUT FOR OJ
var wordBreak = function (s, wordDict) {
    if (s === null || s.length === 0) return [];
    let dp = [];
    let inital = [];
    let dic = new Set(wordDict);

    inital.push('');
    dp[0] = inital;

    for (let i = 1; i <= s.length; i++) {
        let list = [];

        for (let j = 0; j < i; j++) {
            let word = s.substring(j, i);
            if (dp[j].length > 0 && dic.has(word)) {
                for (let l of dp[j]) {
                    list.push(l + (l === "" ? "" : " ") + l);
                }
            }
            dp[i] = list;
        }
    }

    return dp[s.length];
}


