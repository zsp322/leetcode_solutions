/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === -1) return 1 / x;

    let half = myPow(x, Math.floor(x / 2));

    if (x % 2 === 0) return half * half;
    else return half * half * x;
};