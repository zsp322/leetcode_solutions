var shortestDistance = function(maze, start, destination) {
    if (maze === null || maze.length === 0 || maze[0].length === 0) return 0;

    let queue = [];
    let res = Number.MIN_SAFE_INTEGER;
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Array(maze.length).fill(false).map(() => {
        new Array(maze[0].length).fill(false);
    })

    start.push(0);
    queue.push(start);

    while (queue.length > 0) {
        let node = queue.shift();
        let r = node[0];
        let c = node[1];
        let distance = node[2];
        visited[r][c] = true;

        for (let dir of dirs) {
            let nextPoint = computeNextPoint(r, c, dir, maze, distance, destination);
            let row = nextPoint[0];
            let col = nextPoint[1];
            let steps = nextPoint[2];
            if (row === destination[0] && col === destination[1]) {
                res = Math.max(res, steps);
                continue;
            }
            if (visited[row][col]) continue;
            queue.push([row, col, steps]);
        }
    }
};

const computeNextPoint = function (row, col, dir, maze, steps, destination) {
    while (row >= 0 && row < maze.length && col >= 0 && col < maze[0].length && maze[row][col] != 0) {
        if (row === destination[0] && col === destination[1]) {
            return [destination[0], destination[1], steps];
        }
        row += dir[0];
        col += dir[1];
        steps++;
    }
    return [row - dir[0], col - dir[1], steps - 1];
}