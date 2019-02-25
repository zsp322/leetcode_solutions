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
        console.log("i is " + i);
        console.log("j is" + j);
        console.log("result is" + res);
        console.log("Max length is" + maxLength);
    }
}