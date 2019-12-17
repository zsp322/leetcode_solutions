class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) return 0;
        int maxArea = 0;

        int[] dp = new int[matrix[0].length];

        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                dp[j] = matrix[i][j] == '1' ? dp[j] + 1 : 0;
            }
            maxArea = Math.max(maxArea, maxAreaHistogram(dp));
        }
        return maxArea;
    }

    public int maxAreaHistogram(int[] heights) {
        if (heights == null || heights.length == 0) return 0;

        Stack<Integer> stack = new Stack<>();
        int maxArea = Math.MIN_INTEGER;
        int len = heights.length;
        for (int i = 0; i < heights.length; i++) {
            while (!s.isEmpty() && heights[i] < heights[s.peek()]) {
                int partialArea = heights[stack.pop()] * (i - (stack.isEmpty() ? 0 : stack.peek() + 1));
                maxArea = Math.max(maxArea, partialArea);
            }
        }

        while (!stack.isEmpty()) {
            int partialArea = heights[stack.pop()] * (len - (stack.isEmpty() ? 0 : stack.peek() + 1));
            maxArea = Math.max(partialArea, maxArea);
        }

        return maxArea;
    }
}