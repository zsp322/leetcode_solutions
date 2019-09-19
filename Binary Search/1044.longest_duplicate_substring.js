var longestDupSubstring = function(S) {
    let n = S.length;
    let left = 1;
    let right = n;

    let res = [];
    res[0] = "";
    while (left + 1 < right) {
        let L = Math.floor((left + right) / 2);
        if (search(L, n, S, res) != -1) left = L + 1;
        else right = L - 1;
    }
    if (search(right, n, S, res) != -1) return res[0];
    if (search(left, n, S, res) != -1) return res[0];
    return res[0] ;
};

var search = function(L, n ,S, res) {
    let set = new Set();
    let temp;

    for (let i = 0; i < n - L + 1; i++) {
        temp = S.substring(i, i + L);
        if (set.has(temp)) {
            res[0] = temp;
            return i;
        };
        set.add(temp);
    }
    return -1;
}