// Given an array of strings, group anagrams together.
// Example:
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Output:
// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Basic Idea， 用排序过的STRING当作KEY
var groupAnagrams = function(strs) {
    if (strs === null) return strs;

    let dic = new Map();
    for (let i = 0; i < strs.length; i++) {
        let arr = strs[i].split('');
        arr.sort();
        let s = arr.join('');
        if (dic.has(s)) {
            let resultArr = dic.get(s);
            resultArr.push(strs[i]);
            dic.set(s, resultArr);
        } else {
            dic.set(s, [strs[i]]);
        }
    }

    let res = []
    for (let value of dic.values()) {
        res.push(value.slice(0, value.length));
    }
    return res;
};

// 更好的做法是BUILD COUNT STRING去做Key省去排序的时间
//
var groupAnagrams = function(strs) {
    if (strs === null || strs.length === 0) return strs;

    let dic = new Map();


    for (let str of strs) {
        let key = '';
        let count = new Array(26).fil(0);


        for (let i = 0; i < 26; i++) {
            key = key + count[i] + '#';
        }

        if (dic.has(key)) {
            dic.set(key, dic.get(key).push(str));
        } else {
            let arr = [str];
            dic.set(key, arr);
        }
    }

    return new Array(dic.values());
};


