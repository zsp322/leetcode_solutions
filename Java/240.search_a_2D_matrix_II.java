class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;

        int shortSide = Math.min(matrix.length, matrix[0].length);

        for (int i = 0; i < shortSide; i++) {
            if (matrix[i][i] == target) {
                return true;
            } else if (matrix[i][i] < target) {
                // 这里在边界条件处理的不好，一是一开始是用的i + 1, i- 1，有可能出现OUT OF BOUND的问题
                // 二是把search ROW 和 COL的最大值边界搞反了，INTERVIEW的时候一定会出问题
                boolean res = searchInCol(matrix, i, matrix.length - 1, i, target)
                        || searchInRow(matrix, i, matrix[0].length - 1, i, target);
                if (res) return true;
            } else {
                boolean res = searchInCol(matrix, 0, i, i, target)
                        || searchInRow(matrix, 0, i, i, target);
                if (res) return true;
            }
        }
        return false;
    }

    public boolean searchInRow(int[][] matrix, int start, int end, int row, int target) {
        while (start + 1 < end) {
            int middle = (start + end) / 2;
            if (matrix[row][middle] == target) return true;
            else if (matrix[row][middle] < target) {
                start = middle + 1;
            } else {
                end = middle;
            }
        }

        if (matrix[row][start] == target || matrix[row][end] == target) return true;
        return false;
    }

    public boolean searchInCol(int[][] matrix, int start, int end, int col, int target) {
        while (start + 1 < end) {
            int middle = (start + end) / 2;
            if (matrix[middle][col] == target) return true;
            else if (matrix[middle][col] < target) {
                start = middle + 1;
            } else {
                end = middle;
            }
        }
        if (matrix[start][col] == target || matrix[end][col] == target) return true;
        return false;
    }
}