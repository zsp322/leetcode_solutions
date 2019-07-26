// Tag: BFS
// Level: medium
// 更像是knowledge的题目，如果你知道2-color algorithm，则可以很快的做出来
// 是抄答案的题目，需要review，也需要静下心来钻研下
// 

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    if (graph === null) return false;

    // 0 (Not visited) 1 (red) 2 (blue)
    let visited = new Array(graph.length).fill(0);
    
    for (let j = 0; j < graph.length; j++) {
        if (graph[j].length != 0 && visited[j] === 0) {
            visited[j] = 1;
            let queue = [];
            queue.push(j);

            while (queue.length) {
                let cur = queue.shift();
                let neighbors = graph[cur];

                for (let i = 0; i < neighbors.length; i++) {
                    if (visited[neighbors[i]] === 0) {
                        visited[neighbors[i]] = visited[cur] === 1 ? 2 : 1;
                        queue.push(neighbors[i]);
                    } else {
                        if (visited[neighbors[i]] === visited[cur]) return false;
                    }

                }
          }
            
        }
    }
    
    
    return true;
};