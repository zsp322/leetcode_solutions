/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals === null || intervals.length === 0) return intervals;
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    })

    let result = [];
    let last = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];

        if (cur[0] <= last[1]) {
            last[1] = Math.max(cur[1], last[1]); // 这里有个大BUG,因为不是第二个INTERVAL的结尾就一定比第一个的结尾大
        } else {
            res.push(last);
            last = cur;
        }
    }
    res.push(last); //这个值漏了，写完代码最后再自己过一遍

    return res;
};