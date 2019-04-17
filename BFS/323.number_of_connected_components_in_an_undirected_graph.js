// Intutive BFS解法，有个小bug，在建adjcent nodes的dictionary的时候只建了一层关系

var countComponents = function(n, edges) {
    if (edges === null) return n;
    
    let visited = new Array(n).fill(false);
    
    let dic = new Map();
    
    for (let i = 0; i < edges.length; i++) {
        if (dic.has(edges[i][0])) {
            let neighbors = dic.get(edges[i][0]);
            neighbors.push(edges[i][1]);
            dic.set(edges[i][0], neighbors);
        } else {
            dic.set(edges[i][0], [edges[i][1]]);
        }
        if (dic.has(edges[i][1])) {
            let neighbors = dic.get(edges[i][1]);
            neighbors.push(edges[i][0]);
            dic.set(edges[i][1], neighbors);
        } else {
            dic.set(edges[i][1], [edges[i][0]]);
        }
    }
    
    console.log(dic)
    
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        let queue = [];
        queue.push(i);
        while (queue.length) {
            let cur = queue.shift();
            visited[cur] = true;
            let neighbors = dic.has(cur) ? dic.get(cur) : [];
            for (let i = 0; i < neighbors.length; i++) {
                if (!visited[neighbors[i]]) queue.push(neighbors[i]);
            }
        }
        
        count++;
    }
    
    
    return count;
};