/**
 * Question 91. Restore IP Address
 * Solved Strategy:
 *
 * Date: 10/25/2018
 *
 * Description:
 *
 *
 *
 *
 *
 */


/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s < 0) return null;

    var res = [];
    dfs(s, res, 0, [], 0)

    return res;
};


function dfs(s, res, index, curCombo, cur) {
    if (cur === 3 && s.length - 1 - index < 3) {
        curCombo.push(s.substring(index));
        res.push(curCombo);
    } else if (cur < 3) {
        for (let i = 1; i < 4; i++) {
            let num = s.substring(index, index + i + 1);

            if (parseInt(num) > 255 || parseInt(num) < 0) continue;

            curCombo.push(s.substring(index, index + 1 + i) + ".");

            dfs(s, res, index + i, curCombo, cur + 1);

            curCombo = curCombo.slice(cur);

        }
    }
}
