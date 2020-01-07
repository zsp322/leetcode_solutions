// @CreditTo: https://leetcode.com/problems/fraction-to-recurring-decimal/discuss/134656/Clean-JavaScript-solution

function fractionToDecimal(numerator, denominator) {
    // To avoid if numerator = 0, denominator = 1, then Math.sign(numerator) = 0, Math.sign(denominator) = 1, s = '-0'
    if (numerator === 0) return '0';

    let s = '';
    if (Math.sign(numerator) !== Math.sign(denominator)) s += '-';

    let n = Math.abs(numerator);
    const d = Math.abs(denominator);

    s += Math.floor(n / d);
    n %= d;

    if (n === 0) return s;

    s += '.';

    const map = {};

    while (n !== 0) {
        map[n] = s.length;

        n *= 10;
        s += Math.floor(n / d);
        n %= d;

        const i = map[n];  // repeat starting index
        if (i != null) return `${s.slice(0, i)}(${s.slice(i)})`;
    }

    return s;
}