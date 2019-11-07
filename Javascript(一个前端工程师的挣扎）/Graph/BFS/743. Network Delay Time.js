// 743. Network Delay Time.js 
// Tag: BFS 
// Level: Medium
// Date: March 26, 2019
// Solving Strategy: BFS -- 类似于Bellman Ford算法
// 心得： Intutive的想法是建一个Hashmap,把source node和target node的时间连起来，然后建一个array去存储每个点的最短时间
// 自己写出来的，但是没有bug free，忽略了一个点，当当前点的记录时间已经比当前路径时间短的情况下，不需要加入queue继续遍历，回家复习下
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
    if (times === null || times.length === 0) return -1;
    
    let dic = new Map();
    
    // Distance arr
    let arr = new Array(N);
    arr.fill(Number.MAX_SAFE_INTEGER);
    
    arr[K - 1] = 0; // Start point
    let queue = [];
    
    // Build the end-to-end hashmap for all nodes in the graph
    for (let i = 0; i < times.length; i++) {
        let arr = [times[i][1],times[i][2]];
       // Destination Node, Distance
        if (dic.has(times[i][0])) {
            let temp = dic.get(times[i][0]);
            temp.push(arr);
            dic.set(times[i][0], temp);
        } else {
            dic.set(times[i][0], [arr]);
        }
    }
    
    //console.log(dic);
    // Start from point K
    
    queue.push(K);
    
    while (queue.length) {
        let cur = queue.shift();
        
        if (dic.has(cur)) {
             let distArr = dic.get(cur); 
        
             for (let i = 0; i < distArr.length; i++) {
                 let destNode = distArr[i][0];
                 let distance = distArr[i][1];
                 if (arr[destNode - 1] > arr[cur - 1] + distance) {
                     arr[destNode - 1] = arr[cur - 1] + distance;
                     queue.push(destNode);     
                 }
             }  
        }
        // console.log(arr);
    }
    
    // console.log(arr);
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === Number.MAX_SAFE_INTEGER) return -1;  // Not reachable
        res = Math.max(res, arr[i]);
    }
    
    return res;
    
    
    
};