/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    if (strs == null || strs.length == 0) return [[]];

    let dic = new Map();
    for (let i = 0; i < strs.length; i++) {
        let curWord = strs[i];
        let charArr = [...curWord];
        charArr.sort();
        let newWord = charArr.join('');

        if (dic.has(newWord)) {
            let wordList = dic.get(newWord);
            wordList.push(curWord); // Javascript的数组MAP操作上小心一点
            dic.set(newWord, wordList);
        } else {
            dic.set(newWord, [curWord]);
        }
    }
    let res = [];
    for (let [key, value] of dic.entries()) {
        res.push(value.slice(0, value.length));
    }
    return res;
};