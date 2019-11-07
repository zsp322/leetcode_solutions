/**
 * Question 5: Longest Palindromic Substring
 * Solved Strategy: Two Pointer
 * Date: 10/02/2018
 * Description: First time use javascript solve leetcode
 */

/**
 * Start from one point and extend the string to palindrome string
 * Make sure extends it with two alpharebets or one alpharebate as central
 */

/** Couldn't figure out the problem
 *  See the discuss
 */



/**
 * @param {string} s
 * @return {string}
 */

var maxLength = 0;  // indicate the current maximum length of palindromic string
var res = "";

longestPalindrome("cbbd");
function longestPalindrome(s) {
    if (s == null) return s;

    for (let i = 0; i < s.length; i++) {
        extendPalindrome(s, i, i);  //odd central
        extendPalindrome(s, i, i + 1); // even central
    }

    return res;
};

function extendPalindrome(s ,i, j) {
    while (i >= 0 && j <= s.length - 1 && s.charAt(i) === s.charAt(j)) {
        if (j - i + 1 > maxLength) {
            maxLength = j - i + 1;
            res = s.substring(i, j + 1);
        }
        i--;
        j++;
    }
}

// 二刷自己做出来的，但是代码没有DISCUSS里的简洁
let res = '';
var longestPalindrome = function(s) {
    if (s === null) return s;
    res = s.charAt(0);
    for (let i = 0; i < s.length; i++) {
        extendString(s, i, i);
        if (i > 0 && s.charAt(i) === s.charAt(i - 1)) extendString(s, i, i - 1);
    }

    return res;
};


const extendString = function(s, index1, index2) {
    let temp = index1 === index2 ? s.charAt(index1) : s.substring(index1, index2 + 1);
    index1--;
    index2++;
    while (index1 >= 0 && index2 < s.length) {
        const leftChar = s.charAt(index1);
        const rightChar = s.charAt(index2);

        if (leftChar != rightChar) break;
        else {
            temp = leftChar + temp;   // ab
            temp = temp + rightChar;  // abc
            index1--;
            index2++;
            if (temp.length > res.length) res = temp;
        }

    }
}