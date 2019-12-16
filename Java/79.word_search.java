class Solution {
    public boolean exist(char[][] board, String word) {
        if (word == null || word.length() == 0) return true;
        if (board == null || board.length == 0) return false;

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (word.charAt(0) == board[i][j]) {
                    boolean[][] visited = new boolean[board.length][board[0].length];
                    if (dfsHelper(board, visited, word, i, j, 0)) return true;
                }
            }
        }
        return false;
    }

    public boolean dfsHelper(char[][] board, boolean[][] visited, String word, int row, int col, int curIdx) {
        if (curIdx == word.length()) return true;
        if (!validatePos(board, row, col)) return false;
        if (visited[row][col]) return false;
        if (word.charAt(curIdx) != board[row][col]) return false;

        visited[row][col] = true;
        boolean res = dfsHelper(board, visited, word, row - 1, col, curIdx + 1)
                || dfsHelper(board, visited, word, row + 1, col, curIdx + 1)
                || dfsHelper(board, visited, word, row, col + 1, curIdx + 1)
                || dfsHelper(board, visited, word, row, col - 1, curIdx + 1);
        visited[row][col] = false;
        return res;

    }

    public boolean validatePos(char[][] board, int r, int c) {
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return false;
        return true;
    }
}