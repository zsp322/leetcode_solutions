// Date: 11-13-2019
// Tag: DP
// CreditTo: https://leetcode.com/problems/regular-expression-matching/discuss/191830/Java-DP-solution-beats-100-with-explanation

// if p.charAt(j) == s.charAt(j) => dp[i][j] = dp[i - 1][j - 1];
// if p.charAt(j) == '.'  => dp[i][j] = dp[i - 1][j - 1];
// if p.charAt(j) == '*' => dp[i][j - 2] || dp[i][j - 1] || (s.charAt(i - 1) == p.charAt(j) => dp[i- 1][j]
class Solution {
    public boolean isMatch(String s, String p) {
        if (p == null || p.length() == 0) return (s == null || s.length() == 0);

        boolean dp[][] = new boolean[s.length()+1][p.length()+1];
        dp[0][0] = true;
        for (int j=2; j<=p.length(); j++) {
            dp[0][j] = p.charAt(j-1) == '*' && dp[0][j-2];
        }
        for (int i=1; i<=s.length(); i++) {
            for (int j=1; j<=p.length(); j++) {
                if (p.charAt(j-1) == s.charAt(i-1) || p.charAt(j-1) == '.')
                    dp[i][j] = dp[i-1][j-1];
                else if(p.charAt(j-1) == '*')
                    dp[i][j] = dp[i][j-2] || ((s.charAt(i-1) == p.charAt(j-2) || p.charAt(j-2) == '.') && dp[i-1][j]);
            }
        }
        return dp[s.length()][p.length()];
    }
}