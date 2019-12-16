class Solution {
    public int minPathSum(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) return 0;
        int[][] dp = new int[grid.length][grid[0].length];

        dp[0][0] = grid[0][0];
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                int upperSum = valid(i - 1, j, dp) ? dp[i - 1][j] : Integer.MAX_VALUE;
                int leftSum =  valid(i, j - 1, dp) ? dp[i][j - 1] : Integer.MAX_VALUE;

                dp[i][j] = (Math.min(upperSum, leftSum) == Integer.MAX_VALUE ? 0 : Math.min(upperSum, leftSum)) + grid[i][j];
            }
        }

        return dp[grid.length - 1][grid[0].length - 1];
    }

    public boolean valid(int row, int col, int[][] dp) {
        if (row < 0 || row >= dp.length || col < 0 || col >= dp[0].length) return false;
        return true;
    }
}