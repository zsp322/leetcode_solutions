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



// Quick-Union -- lazy approach with path compression
class Solution {
    public int numIsLands(char[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) return 0;

        int m = grid.length;
        int n = grid[0].length;

        UnionFind uf = new UnionFind(grid);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '0') continue;
                int p = i * n + j;
                int q;
                if(i < m - 1 && grid[i + 1][j] == '1') {
                    q = p + n;
                    uf.union(p, q);
                }
                if(j < n - 1 && grid[i][j + 1] == '1') {
                    q = p + 1;
                    uf.union(p, q);
                }
            }
        }

        return UF.count();
    }
}

class UF {
    private int count = 0;
    private int[] id = null;

    public UF(char[][] board) {
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (grid[i][j] == '1') count++;
            }
        }

        id = new int[board.length * board[0].length];
        for (int i = 0; i < id.length; i++) {
            id[i] = i;
        }
    }

    public void union(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);

        if (pRoot == qRoot) return;
        id[pRoot] = qRoot;
        count--;
    }

    public int find(int p) {
        while (p != id[p]) {
            id[p] = id[id[p]];
            p = id[p];
        }
        return p;
    }

    public boolean isConnect(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);

        if (pRoot != qRoot) return false;
        else return true;
    }

    public int count() {
        return count;
    }
}