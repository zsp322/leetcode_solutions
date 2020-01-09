// Is number is integer or can be 0.001
// negative number is not
const powerOfTen = function(n) {
    if (n <= 0) {
        return false;
    } else if (n < 1) {
        while (n < 1) {
            n *= 10;
        }
    }
    while (n % 10 == 0) {
        n /= 10;
    }
    return n == 1;
}

// If it can be non-integer
// Not cool
const powerOfTen = function(n) {
    return (Math.log10(n) / Math.log10(10)) % 1 == 0;
}

