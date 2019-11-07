/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {
    // Construct the graph with seqs
    // Find the only topological sort -- Because Toplogical Sort means if u comes before v, then the order should be u before v
    // And it has to be only topological sort in the resultlist;
    let graph = new Map(); // Val points to key -- Value will be the lists of points point to the key node
    let indegrees = new Map();
    // Build the graph
    for (let i = 0; i < seqs.length; i++) {
        for (let j = 0; j < seqs[i].length; j++) {
            if (!graph.has(seqs[i][j])) graph.set(seqs[i][j], new Array());
            if (!indegrees.has(seqs[i][j])) indegrees.set(seqs[i][j], 0);

            if (j > 0) {
                graph.get(seqs[i][j - 1]).push(seqs[i][j]); //u -> v key: u value:v
                indegrees.set(seqs[i][j], indegrees.get(seqs[i][j]) + 1);
            }
        }
    }


    //console.log(indegrees.length)
    if (indegrees.size != org.length) return false;

    // Adding starting point
    let queue = [];
    for (let [key, value] of indegrees.entries()) {
        if (value === 0) {
            queue.push(key);
        }
    }



    // Construct the topological sort
    let index = 0; // The index is the iterating counter track which alpharebet
    while (queue.length > 0) {
        if (queue.length > 1) return false; // It supposed to be only one element in the queue all time

        let node = queue.shift();
        if (node != org[index++]) return false;

        let neighbors = graph.get(node);

        neighbors.forEach(function(neighbor) {
            indegrees.set(neighbor, indegrees.get(neighbor) - 1);
            if (indegrees.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        })

    }
    return index === org.length;
}