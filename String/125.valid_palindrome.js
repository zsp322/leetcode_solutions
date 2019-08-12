/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === null || s.length === 0) return true;

    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (!isAlphabet(s.charAt(start))) {
            start++;
            continue;
        } else if (!isAlphabet(s.charAt(end))) {
            end--;
            continue;
        } else if (s.charAt(start++).toLowerCase() !== s.charAt(end--).toLowerCase()) return false;


    }
    return true;
};

const isAlphabet = function(char) {
    if ((char >= 'a' && char <= 'z')
        || (char >= 'A' && char <= 'Z')
        || (char >= '0' && char <= '9')) {
        return true;
    } else return false;
}