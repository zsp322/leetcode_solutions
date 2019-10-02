var wordBreak = function(s, wordDict) {
    let wordDictSet = new Set(wordDict);

    let dp = new Array(wordDict.length + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(i, j))) {
                 dp[i] = true;
                 break;
            }
        }
    }

    return dp[s.length()];
};
