var shortestSubarray = function(A, K) {
    let sums = new Array(A.length + 1);
    for (let i = 1; i < sums.length; i++) sums[i] = sums[i - 1] + A[i - 1];

    let minLen = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < sums.length; i++) {
        let end = binarySearch(i + 1, sums.length - 1, sums[i] + s, sums);
        if (end === sums.length) break;
        if (end - i < minLen) minLen = end - i;
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

const binarySearch = function (lo, hi, key, sums) {
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (sums[mid] >= key) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
}