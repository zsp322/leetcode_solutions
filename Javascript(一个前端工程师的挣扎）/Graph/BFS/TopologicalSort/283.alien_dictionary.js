/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let graph = constructGraph(words);
    return topologicalSorting(graph);
};


const constructGraph = function (words) {
    let graph = new Map();
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            let c = words[i].charAt(j);
            
            
            if (!graph.has(c)) {
                graph.set(c, new Set());
            }
        }
    }
    
    for (let i = 0; i < word.length - 1; i++) {
        let index = 0;
        
        while (index < words[i].length && index < words[i + 1].length) {
            if (words[i].charAt(index) != words[i + 1].charAt(index)) {
                graph.get(words[i].charAt(index)).add(word[i + 1].charAt(index));
                break;
            }
            
            index++;
        }
        
        return graph;
    }
}

const indegree = function (graph) {
    let indegree = new Map();
    for (let u of graph.keySet()) {
        indegree.put(u, 0);
    }

    for (let u of graph.keySet()) {
        for (let v of graph.get(u)) {
            indegree.set(v, indegree.get(v) + 1);
        }
    }
    return indegree;
}

const topologicalSorting = function() {
    let indegree = getIndegree(graph);
    // as we should return the topo order with lexicographical order
    // we should use PriorityQueue instead of a FIFO Queue
    let queue = [];

    for (let u of indegree.keySet()) {
        if (indegree.get(u) == 0) {
            queue.offer(u);
        }
    }

    let sb = [];
    while (!queue.isEmpty()) {
        let head = queue.shift();
        sb += head;

        for (let neighbor of graph.get(head)) {
            indegree.put(neighbor, indegree.get(neighbor) - 1);
            if (indegree.get(neighbor) == 0) {
                queue.offer(neighbor);
            }
        }
    }

    if (sb.length() != indegree.size()) {
        return "";
    }
    return sb.toString();
}