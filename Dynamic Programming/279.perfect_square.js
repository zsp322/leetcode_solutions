// Tag: Dynamic Programming
// Discussion Board: https://leetcode.com/problems/perfect-squares/discuss/71632/Beautiful-8-Lines-Java-Solution
// First Trail: DFS -- Timeout
// Level: Discuss Board

var numSquares = function(n) {
    let arr = new Array(n + 1);
    
    for (let i = 0; i <= n; i++) {
        arr[i] = i; // The least solution
        
        for (let j = 1; j * j <= i; j++) {
            arr[i] = Math.min(arr[i], arr[i - j * j] + 1);
        }
    }
    
    return arr[n];
};