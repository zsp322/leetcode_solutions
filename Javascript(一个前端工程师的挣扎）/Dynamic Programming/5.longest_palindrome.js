
// 三刷用DP做
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) return "";

    let dp = new Array(s.length).map(() => new Array(s.length));
    let res = "";

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i; j < s.length ; j++) {
            dp[i][j] = (s.charAt(i) === s.charAt(j))
                       && ((j - i < 3) || (dp[i - 1][j - 1]));

            if (dp[i][j] && (res === null || j - i + 1 > res.length)) {
                res = s.substring(i, j + 1);
            }
        }
    }
    return res;
};
