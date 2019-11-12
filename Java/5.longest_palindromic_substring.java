// Date:11/11/2019
// DP Solution
// TIME COMPLEXITY: O(N^2)

class Solution {
    public String longestPalindrome(String s) {
        if (s == null) return "";

        boolean[][] dp = new boolean[s.length()][s.length()];
        // Initalize diaogol element as true;
        String res = "";

        // DP matrix的looping不能死板，要根据情况来判断
        for (int i = s.length() - 1; i >= 0; i--) {
            for (int j = i; j < s.length(); j++) {
                dp[i][j] = (s.charAt(i) == s.charAt(j)) && (j - i < 3 || dp[i + 1][j - 1]);

                if (dp[i][j] && s.substring(i, j + 1).length() > res.length()) {
                    res = s.substring(i, j + 1);
                }
            }
        }

        return res;
    }
}