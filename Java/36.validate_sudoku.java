class Solution {
    public boolean isValidSudoku(char[][] board) {
        if (board == null || board.length == 0 || board[0].length == 0) return true;

        HashMap<Integer, Integer> [] rows = new HashMap[9];
        HashMap<Integer, Integer> [] columns = new HashMap[9];
        HashMap<Integer, Integer> [] boxes = new HashMap[9];
        for (int i = 0; i < 9; i++) {
            rows[i] = new HashMap<Integer, Integer>();
            columns[i] = new HashMap<Integer, Integer>();
            boxes[i] = new HashMap<Integer, Integer>();
        }

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                char currentChar = board[i][j];
                if (currentChar == '.') continue;

                int num = (int)currentChar;
                int boardIdx = (i / 3) * 3 + j / 3; // 这个是一个小trick

                rows[i].put(num, rows[i].getOrDefault(num, 0) + 1);
                columns[j].put(num, columns[j].getOrDefault(num, 0) + 1);
                boxes[boardIdx].put(num, boxes[boardIdx].getOrDefault(num, 0) + 1);

                if (rows[i].get(num) > 1) return false;
                if (columns[j].get(num) > 1) return false;
                if (boxes[boardIdx].get(num) > 1) return false;
            }
        }

        return true;
    }
}