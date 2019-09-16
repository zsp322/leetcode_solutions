//
// Set union A | B
// Set intersection A & B
// Set subtraction A & ~B
// Set negation ALL_BITS ^ A or ~A
// Set bit A |= 1 << bit
// Clear bit A &= ~(1 << bit)
// Test bit (A & 1 << bit) != 0
// Extract last bit A&-A or A&~(A-1) or x^(x&(x-1))
// Remove last bit A&(A-1)
// Get all 1-bits ~0

// https://leetcode.com/problems/sum-of-two-integers/discuss/84290/Java-simple-easy-understand-solution-with-explanation
// 硬背下来
let getSum = function(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;

    while (b != 0) {
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    return a;
}

let getSubstract = function (a, b) {
    while (b != 0) {
        let borrow = (~a) & b;
        a = a ^ b;
        b = borrow << 1;
    }
    return a;
}