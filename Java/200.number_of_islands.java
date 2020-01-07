// 三种解法都要掌握
// 从次优解BFS开始
// BFS会超时嘛？
class Solution {
    public int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;
        int totalCount = 0;

        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    bfsHelper(grid, i, j);
                    totalCount++;
                }
            }
        }
        return totalCount;
    }

    public void bfsHelper (char[][] grid, int row, int col) {
        Queue<Point> queue = new LinkedList<>();
        Point startPoint = new Point(row, col);
        queue.add(startPoint);

        while (!queue.isEmpty()) {
            Point cur = queue.poll();
            grid[cur.r][cur.c] = '0';
            for (int[] dir : dirs) {
                Point newPoint = new Point(cur.r + dir[0], cur.c + dir[1]);
                if (validate(newPoint, grid)) {
                    queue.add(newPoint);
                }
            }
        }
    }

    public boolean validate(Point point, char[][] grid) {
        if (point.r < 0 || point.r >= grid.length || point.c < 0
                || point.c >= grid[0].length
                || grid[point.r][point.c] == '0') {
            return false;
        }
        return true;
    }
}


class Point {
    int r;
    int c;
    public Point(int r, int c) {
        this.r = r;
        this.c = c;
    }
}