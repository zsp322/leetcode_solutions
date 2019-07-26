/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 仔细梳理了一遍思路，感觉遍历的思路理不清楚
// 这道题要吃透真的还蛮耗精力的，做了一天了还没理太清楚,
// dp[i][j]代表前 i + 1 个characters from s 和前 j + 1个characters from p 是否MATCH

 import create2DArray from './utility.js'

var isMatch = function(s, p) {
   let m = s.length;
   let n = p.length;

   let dp = new Array(rows).fill(false).map(() => new Array(columns).fill(false));

   dp[0][0] = true; // Empty string match empty string

   // Empty pattern doesn't fit any string except empty

   // If pattern character is *, it can eliminate the procedding character to empty string, so it will match with dp[0][i - 1]
   // Eventually the pattern has to be .*.*
   for (let i = 0; i < p.length; i++) {
      if (p.charAt(i) === '*' && dp[0][i - 1]) {
         dp[0][i+1] = true;
      }
   }

   for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < p.length; j++) {
         if (s.charAt(i) === p.charAt(j) || p.charAt(j) === '.') {
             dp[i + 1][j + 1] = dp[i][j];
         } else {
            if (p.charAt(j) === '*') {
               if (p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != '.') dp[i + 1][j + 1] = dp[i + 1][j - 1]; // a* counts as empty string
               // 如果前面的字母对应match，则有以下几种状态方程

               // Case 1: Ignore the character a* as a(Single Character)
               // Case 2: Ignore the character a* as empty string  -- i characters match j - 1 characters of pattern
               // Case 3: Ignore the character a* as aa(duplicate Characters) --  i characters match j - 2 chacacters of pattern
               else {
                  dp[i + 1][j + 1] = dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1];
               }
            }
         }
      }
   }

   return dp[m][n];
};