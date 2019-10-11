/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// DFS解法 -- timeout
var wordBreak = function(s, wordDict) {
    if (s === null || s === '') return true;
    let dic = new Set(wordDict);

    return dfsHelper(dic, s, 0);
};

const dfsHelper = function (dic, s, curIdx) {
    if (curIdx === s.length) return true;

    let res = false;
    for (let i = curIdx; i <= s.length; i++) {
        let word = s.substring(curIdx, i)

        if (dic.has(word)) {
            res = res || dfsHelper(dic, s, curIdx + i);
        }
    }

    return res;
}

// DFS with memorization
var wordBreak = function(s, wordDict) {
    if (s === null || s === '') return true;
    let dic = new Set(wordDict);
    let mem = new Array(s.length).fill(null);
    return dfsHelper(dic, s, 0, mem);
};

const dfsHelper = function (dic, s, curIdx, mem) {
    if (curIdx === s.length) return true;

    if (mem[curIdx] != null) {
        return mem[curIdx];
    }

    for (let i = curIdx; i <= s.length; i++) {
        let word = s.substring(curIdx, i)

        if (dic.has(word) && dfsHelper(dic, s, i, mem)) {
           return mem[curIdx] = true;
        }
    }

    return mem[curIdx] = false;
}

// BFS with memorization
var wordBreak = function(s, wordDict) {
    if (s === null || s.length === 0) return false;
    let dic = new HashSet(wordDict);
    let queue = [];
    let visited = new Array(s.length).fill(0);

    queue.push(0);
    while (queue.length > 0) {
        let curIdx = queue.shift();

        if (visited[curIdx] === 1) continue;

        for (let i = curIdx + 1; i < s.length; i++) {
            if (dic.has(s.substring(curIdx, i))) {
                queue.push(i);

                if (i === s.length) return true;
            }
        }

        visited[curIdx] = 1;
    }

    return false;

};

// Dynamic Programming
// state function: if dp[i] = true && wordDic.has(i, j) => dp[j] = true
var wordBreak = function (s, wordDict) {
    if (s === null || s.length === 0) return false;

    let dic = new HashSet(wordDict);
    let dp = new Array(s.length + 1);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && dic.has(s.substring(j, i))) dp[i] = true;
            break;
        }
    }

    return dp[s.length];

}