/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s === null) return s;
    let arr = new Array(128).fill(0);
    let left = 0, right = 0, head = -1, counter = 2;
    
};