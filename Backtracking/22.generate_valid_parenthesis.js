
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
//     For example, given n = 3, a solution set is:
//
//     [
//         "((()))",
//         "(()())",
//         "(())()",
//         "()(())",
//         "()()()"
//     ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n <= 0) return [];

};

// @param res : the result
// @param openBrack: how many open brackets in the former path
// @param left: how many left brackets avaiable
// @param right: how many right brackets avaiable
const dfsHelper = function(res, curPath, openBracket, left, right, n) {
    if (curPath.length === n) {
        if (!res.includes(curPath.join(""))
            && left === 0
            && right === 0
            && openBracket === 0
        ) res.add(curPath.join(""));
        return;
    } else {
        // When there is a choice for closing or opening a new one
        if (openBracket > 0) {
            if (left > 0) {
                curPath.push('(');
                left--;
                openBracket++;
                dfsHelper(res, curPath, openBracket, left, right, n);
                left++;
                openBracket--;
                curPath.pop();

            if (right > 0) {
                curPath.push(')');
                right--;
                openBracket--;
                dfsHelper(res, curPath, openBracket, left, right, n);
                right++;
                openBracket++;
                curPath.pop();
            }
        } else if (left > 0) {
            curPath.push('(');
            left--;
            openBracket++;
            dfsHelper(res, curPath, openBracket, left, right, n);
            left++;
            openBracket--;
            curPath.pop();

        }
    }
}


// Optimal Leetcode discussion solution
var generateParenthesis = function(n) {
    if (n <= 0) return [];
    let res = [];
    dfsHelper(res, "", 0, 0, n);
    return res;
};

const dfsHelper = function(res, str, open, close, max){
    if(str.length === max*2){
        res.push(str);
        return;
    }
    if(open < max) {
        dfsHelper(res, str + "(", open + 1, close, max);
    }
    if(close < open) {
        dfsHelper(res, str + ")", open, close + 1, max);
    }
}