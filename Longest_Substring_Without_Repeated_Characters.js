/**
 * Question 3: Longest string without repeated alphabets
 * Solved Strategy:
 * Date: 09/27/2018
 * Description: First time use javascript solve leetcode
 * Learn mainuplate linked list in javascript
 */

/** Instead of using a set to tell
 * if a character exists or not, we could define a mapping of the characters to its index.
 * Then we can skip the characters immediately when we found a repeated character.
 * The reason is that if s[j]s[j] have a duplicate in the range [i, j)[i,j) with index
​​ * we don't need to increase ii little by little. We can skip all the elements in the range [i, j'][i,j']
 * and let ii to be j' + 1 directly.
 */

/** Couldn't figure out the problem
 *  Using sliding window optimized solution
 *  Solved by see the solution
 *  Need to review
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s == null) {
        return null;
    }

    var map = new Map();
    var res = 0;
    //Maintain two pointers, indicating start and end position for the longest substring
    for (var i = 0, j = 0; j < s.length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
        }
        res = Math.max(j - i + 1, res);
        map.set(s.charAt(j), j + 1);
    }

    return res;
};