/**
 * @param {string} digits
 * @return {string[]}
 */

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// 很标准的一道backtracking题目，做好边界判断即可
var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) return [];

    let dic = new Map();
    dic.set('2', ['a', 'b', 'c']);
    dic.set('3', ['d', 'e', 'f']);
    dic.set('4', ['g', 'h', 'i']);
    dic.set('5', ['j', 'k', 'l']);
    dic.set('6', ['m', 'n', 'o']);
    dic.set('7', ['p', 'q', 'r', 's']);
    dic.set('8', ['t', 'u', 'v']);
    dic.set('9', ['w', 'x', 'y', 'z']);

    let res = [];
    dfsHelper(res, dic, digits, []);
    return res;
};

const dfsHelper = function(res, dic, digits, curPath) {
    if (curPath.length === digits.length) {
        if (!res.includes(curPath.join(""))) res.push(curPath.join(""));
        return;
    } else {
        const curIndex = curPath.length;
        const arr = dic.get(digits[curIndex]); // Digits of index, not index

        for (let i = 0; i < arr.length; i++) {
            curPath.push(arr[i]);
            dfsHelper(res, dic, digits, curPath);
            curPath.pop();
        }
    }
}


//二刷
var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) return [];

    let dic = new Map();
    dic.set('2', ['a', 'b', 'c']);
    dic.set('3', ['d', 'e', 'f']);
    dic.set('4', ['g', 'h', 'i']);
    dic.set('5', ['j', 'k', 'l']);
    dic.set('6', ['m', 'n', 'o']);
    dic.set('7', ['p', 'q', 'r', 's']);
    dic.set('8', ['t', 'u', 'v']);
    dic.set('9', ['w', 'x', 'y', 'z']);
    let res = [];

    dfsHelper(dic, digits, '', res);
    return res;
}

const dfsHelper = function(dic, digits, curPath, res) {
    if (curPath.length === digits.length) {
        if (!res.includes(curPath)) res.push(curPath);
        return;
    } else {
        let arr = dic.get(digits[curPath.length]);
        // console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            curPath = curPath + arr[i];
            dfsHelper(dic, digits, curPath, res);
            curPath = curPath.substring(0, curPath.length - 1)
        }
    }
}