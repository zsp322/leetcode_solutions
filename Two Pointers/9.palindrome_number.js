/**
 * Question 9. Palindromic Number
 * Solved Strategy: Simple Number mainpulation
 * Date: 10/04/2018
 * Description: First time use javascript solve leetcode
 * Learn Math.floor() because JS doesn't have int type
 */


/** First question solved by myself!
 *  But convert number to string requires extra running time
 *  Two Pointer
 *
 */

var isPalindrome = function(x) {
    if (x < 0) return false;
    var s = x.toString();  // convert num to string

    var i = 0;
    var j = s.length - 1;

    while (i < j) {
        if (s.charAt(i) != s.charAt(j)) return false;

        i++;
        j--;
    }

    return true;
};
