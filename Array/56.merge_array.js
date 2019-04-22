// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// 思路: 先sort array按照头数字大小，然后两两合并 o(nlogn)
// 这道题很需要注重细节,这是自己一刷写的代码，问题很多，细节出了很多bug，其实考的也是你的代码的实现，思路请不清晰，提交了7-8次才ac，在面试中显然是不能接受的

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals === null || intervals.length === 0) return [];
    if (intervals.length === 1) return intervals;
    
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });
    
    let res = [intervals.shift()];
    
    while (intervals.length) {
        let last = res.pop() ;
        
        let cur = intervals.shift();
        
        if (last[1] < cur[0]) {
            res.push(last);  // Keep two intervals
            res.push(cur);
        } else {
            let newStart = last[0] < cur[0] ? last[0] : cur[0];
            let newEnd = last[1] > cur[1] ? last[1] : cur[1];
            
            res.push([newStart, newEnd]);
        }
        
    }
   
    return res;
};