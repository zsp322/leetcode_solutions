/**
 * @param {string} s
 * @return {number}
 */
// HashMap 
var firstUniqChar = function(s) {
    if (s == null || s.length == 0) return -1;

    let dic = new Map();
    for (let i = 0; i < s.length; i++) {
        if (dic.has(s.charAt(i))) {
            dic.set(s.charAt(i), dic.get(s.charAt(i)) + 1);
        } else {
            dic.set(s.charAt(i), 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (dic.get(s.charAt(i)) == 1) return i;
    }
    return -1;
};