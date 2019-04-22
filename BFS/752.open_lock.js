// Date: April 18th
// Tag: BFS
// Level: Medium
// 心得：一道简单straightforward的bfs题目，犯了个错误是character = 9的边界条件没考虑
// 抄了discuss里的建string写法，原来自己写的太琐碎，不简练
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */

var openLock = function(deadends, target) {
    if (target === null) return -1;
    
    let dic = new Set(deadends);
    if (dic.has('0000')) return -1; // 这个edge case有点恶心
    
    let visited = new Set();
    let queue = [];
    let steps = 0;
    queue.push('0000');
    
    while (queue.length) {
        let size = queue.length;

        for (let j = 0; j < size; j++) {
            let cur = queue.shift();
            
            if (visited.has(cur)) continue;
            
            visited.add(cur);
            
            if (cur === target) return steps;
            
            for (let i = 0; i < cur.length; i++) {
                let char = cur.charAt(i);
                
                // 这个string建法值得学习
                let s1 = cur.substring(0, i) 
                    + (char === '9' ? 0 : char - '0' + 1)
                    + cur.substring(i + 1);
                
                let s2 = cur.substring(0, i) 
                    + (char === '0' ? 9 : char - '0' - 1)
                    + cur.substring(i + 1);
                
                if (!dic.has(s1)) queue.push(s1);
                if (!dic.has(s2)) queue.push(s2);
            }
        }
        steps++;
    }


    return -1;
};