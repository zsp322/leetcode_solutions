/**
 * @param {string} S
 * @return {string}
 */

// Time Complexity: O(\mathcal{A}(N + \log{\mathcal{A}}))O(A(N+logA)), where NN is the length of SS, and \mathcal{A}A is the size of the alphabet. In Java, our implementation is O(N + \mathcal{A} \log {\mathcal{A}})O(N+AlogA). If \mathcal{A}A is fixed, this complexity is O(N)O(N).
// Space Complexity: O(N)O(N). In Java, our implementation is O(N + \mathcal{A})O(N+A).
//
var reorganizeString = function(S) {
    if (S === null) return "";

    let arr = new Array(26).fill(0);
    let a = "a";
    for (let i = 0; i < S.length; i++) {
        let curCharCode = S.charCodeAt(i) - a.charCodeAt(0);

        arr[curCharCode] += 100;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] += i;
    }

    // Encoded count as 100 * actual count + i

    arr.sort();

    let ans = new Array(S.length);
    let t = 1;

    for (let code of arr) {
        let count = Math.floor(code / 100);
        let ch = String.fromCharCode(code % 100 + a.charCodeAt(0));

        if (count > (S.length + 1) / 2) return "";

        for (let i = 0; i < count; i++) {
            if (t >= N) t = 0;
            ans[t] = chl
            t += 2;
        }
    }

    return ans.join("");

};


