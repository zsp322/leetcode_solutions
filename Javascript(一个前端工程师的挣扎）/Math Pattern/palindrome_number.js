const isPalidrome = function (x) {
    if (x < 0) return 0;

    return x === reverse(x);
}

const reverse = function (x) {
    let res = 0;

    while (x != 0) {
        res = res * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return res;
}