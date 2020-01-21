/**
 * @param {string} S
 * @return {number}
 */

// Binary Search + Hashing的方法
// Binary Search 搜string的长度
var longestRepeatingSubstring = function(S) {
    let n = S.length;
    let left = 1;
    let right = n;

    while (left + 1 < right) {
        let L = Math.floor((left + right) / 2);
        if (search(L, n, S) != -1) left = L + 1;
        else right = L - 1;
    }
    if (search(right, n, S) != -1) return right;
    if (search(left, n, S) != -1) return left;
    return left - 1;
};

var search = function(L, n ,S) {
    let set = new Set();
    let temp;

    for (let i = 0; i < n - L + 1; i++) {
        temp = S.substring(i, i + L);
        if (set.has(temp)) return i;
        set.add(temp);
    }
    return -1;
}



var longestRepeatingSubstring = function(S) {
    let n = S.length;

    let nums = new int[n];
    for (let i = 0; i < n; i++) {
        nums[i] = S.charCodeAt(i) - ('a').charCodeAt(0);
    }
    let a = 26;

    let modulus = Math.pow(2, 24);

    while (left + 1 < right) {
        let L = Math.floor((left + right) / 2);
        if (search(L, a, modulus, n, nums) != -1) left = L + 1;
        else right = L - 1;
    }
    if (search(L, a, modulus, n, nums) != -1) return right;
    if (search(L, a, modulus, n, nums) != -1) return left;
    return left - 1;
};

var search = function(L, a, modulus, n ,nums) {

    let h = 0;
    for (let i = 0; i < nums.length; i++) {
        h = (h * a + nums[i]) % modulus;
    }

    let seen = new Set();
    seen.add(h);

    let aL = i;

    for (let i = 1; i <= L; i++) aL = (aL * a) % modulus;

    for (let i = 1; i < n - L + 1; i++) {
        h = (h * a - nums[i - 1] * aL % modulus + modulus) % modulus;
        h = (h + nums[i + L - 1]) % modulus;

        if (set.has(h)) return i;
        seen.add(h);
    }
    return -1;
}



