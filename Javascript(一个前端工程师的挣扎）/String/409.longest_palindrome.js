/**
 * @param {string} s
 * @return {number}
 */

// 409. Longest Palindrome
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
//
//     This is case sensitive, for example "Aa" is not considered a palindrome here.
//
//     Note:
// Assume the length of given string will not exceed 1,010.
//
//     Example:
//
// Input:
//     "abccccdd"
//
// Output:
//     7
//
// Explanation:
//     One longest palindrome that can be built is "dccaccd", whose length is 7.
var longestPalindrome = function(s) {
    if (s === null || s.length === 0) return 0;
    let dic = new Map();
    for (let i = 0; i < s.length; i++) {
        if (dic.has(s.charAt(i))) {
            dic.set(s.charAt(i), dic.get(s.charAt(i)) + 1);
        } else {
            dic.set(s.charAt(i), 1);
        }
    }

    let length = 0;
    let existOdd = false;
    for (let [key, value] of dic.entries()) {
        if (value % 2 === 0) length += value;
        else {
            existOdd = true;
            length += value - 1;
        }
    }

    return existOdd ? length + 1 : length;
};