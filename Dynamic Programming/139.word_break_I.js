// DP soltuin
var wordBreak = function(s, wordDict) {
    let wordDictSet = new Set(wordDict);

    let dp = new Array(wordDict.length + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && s.has(s.substring(i, j))) {
                 dp[i] = true;
                 break;
            }
        }
    }

    return dp[s.length()];
};

// DFS + Memorization
var wordBreak = function(s, wordDict) {
    let dic = new Set(wordDict);
    let memory = new Array(s.length).fill(null);
    return dfsHelper(s, dic, 0, memory);
};

let dfsHelper = function(s, dic, curIdx, memory) {
    if (curIdx === s.length) return true;

    if (memory[curIdx] != null) return memory[curIdx];

    let res = false;
    for (let i = curIdx; i <= s.length; i++) {
        let word = s.substring(curIdx, i);
        if (dic.has(word)) {
            res = res || dfsHelper(s, dic, i, memory);
        }
    }

    memory[curIdx] = res;
    return res;
}
