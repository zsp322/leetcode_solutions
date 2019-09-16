var minIncrementForUnique = function(A) {
    let count = new Array(80000).fill(0);

    for (let i = 0; i < A.length; i++) {
        count[A[i]]++;
    }

    let taken = 0;
    let ans = 0;

    for (let i = 0; i < 80000; i++) {
        if (count[i] >= 2) {
            taken += count[i] - 1;
            ans -= (count[i] - 1) * i;
        } else if (taken > 0 && count[i] === 0) {
            taken--;
            ans += i;
        }
    }
    return ans;
};
