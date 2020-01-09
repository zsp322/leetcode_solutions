/**
 * @param {string} str
 * @return {number}
 */

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
var myAtoi = function(str) {
    if (str.length === 0 || str === null) return null;

    let index = 0;
    let sign = 1;
    let total = 0;

    let MAX_VALUE = Math.pow(2, 31) - 1;
    // Trimming Out white space
    while (str.charAt(index) === ' ' && index < str.length) index++;

    // Found out the sign
    if(str.charAt(index) == '+' || str.charAt(index) == '-'){
        sign = str.charAt(index) == '+' ? 1 : -1;
        index ++;
    }

    while (index < str.length) {
        if (str.charAt(index) === ' ') break;
        let digit = str.charCodeAt(index) - ('0').charCodeAt(0);
        if (digit < 0 || digit > 9 || digit == NaN) break;

        // Check whether it's out of bound
        if (Math.floor((MAX_VALUE / 10)) < total
            || (Math.floor((MAX_VALUE / 10)) === total
                && (MAX_VALUE % 10) < digit))
            return sign === 1 ? MAX_VALUE : -MAX_VALUE - 1;

        total = 10 * total + digit;
        index++;
    }

    return total * sign;
};