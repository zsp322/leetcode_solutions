/* 207. Course Schedule */
/* Description: There are a total of n courses you have to take, labeled from 0 to n-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?*/
// Tag:  DFS -- Intutive解法
// Date: March 20, 2019
// Solving Strategy: DFS -- Intutive解法

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    if (prerequisites === null || prerequisites.length === 0) return numCourses;
    
    let dic = new Map();
    
    for (let i = 0; i < prerequisites.length; i++) {
        if (dic.has(prerequisites[i][0])) {
            let arr = dic.get(prerequisites[i][0]);
            console.log(arr);
            arr.push(prerequisites[i][1]);
            dic.set(prerequisites[i][0], arr);
        } else {
            let arr = [];
            arr.push(prerequisites[i][1])
            dic.set(prerequisites[i][0], arr);
        }
    }
    
    for (let i = 0; i < numCourses; i++) {
        let visited = new Array(numCourses);
        visited.fill(false);
        if (hasCycle(visited, i, dic)) return false;   // 如果有环则返回false
    }
    
    return true;
};

const hasCycle = function(visited, vertex, dic) {
    if (visited[vertex]) return true;
    if (!dic.has(vertex) || dic.get(vertex).length === 0) return false;  // Dead end
    
    visited[vertex] = true;
    
    let neighbors = dic.get(vertex);
    
    for (let i = 0; i < neighbors.length; i++) {
        let res = hasCycle(visited, neighbors[i],dic);
        visited[neighbors[i]] = false;
        if (res) return true;
    }
    
    visited[vertex] = false;
    return false;
}