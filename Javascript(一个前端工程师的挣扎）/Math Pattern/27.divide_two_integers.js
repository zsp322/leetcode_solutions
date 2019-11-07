// 这道题记住就行，因为不太可能记的得怎么去BIT SHIFTING

var divide = function(dividend, divisor) {
    if (divisor === 0) {
        return dividend >=0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER;
    }

    if (dividend === 0) {
        return 0;
    }

    if (dividend === Number.MAX_SAFE_INTEGER && divisor === -1) return Number.MAX_SAFE_INTEGER;

    let isNegative = (dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0);

    if (isNegative != true) isNegative = false;

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {
        let shift = 0;
        while (a >= (b << shift)) {
            shift++;
        }
        a -= b << (shift - 1);
        result += 1 << (shift - 1);
    }

    return isNegative ? -result : result;
};