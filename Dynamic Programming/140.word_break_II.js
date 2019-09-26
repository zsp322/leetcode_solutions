/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1);
    let inital = [];

    inital.push("");
    dp[0] = inital;

    for (let i = 0; i <= s.length; i++) {
        let list = [];

        for (let j = 0; j < i; j++) {
            if (dp[j].length > 0 && wordDict.includes(s.substring(i, j))) {
                for (let str of dp[j]) {
                    list.push(str + (str === "" ? "" : " ") + s.substring(j, i));
                }
            }
        }
        dp[i] = list;
    }

    return dp[s.length];
};