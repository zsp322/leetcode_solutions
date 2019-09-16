/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 考点是怎么数number of bits
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let count = 0;
    while (xor != 0) {
        count += xor & 1;
        xor >>= 1;
    }
    return count;
};