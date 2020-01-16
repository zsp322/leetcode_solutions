class Solution {
    public int[] countBits(int num) {
        int index = 1;
        while (Math.pow(2, index) < num) index++;

        int[] dp = new int[(int)Math.pow(2, index) + 1];

        for (int i = 1; i <= index; i++) {
            int startIndex = (int)Math.pow(2, i - 1) + 1;
            int endIndex = (int)Math.pow(2, i);
            dp[startIndex - 1] = 1;
            dp[endIndex] = 1;
            for (int j = startIndex; j < endIndex; j++) {
                dp[j] = dp[j - startIndex + 1] + 1;
            }
        }

        int[] res = new int[num + 1];
        for (int i = 0; i <= num; i++) {
            res[i] = dp[i];
        }
        return res;
    }
}


// Bit Manipulation Solution
// DP formula:
// P(x)=P(x/2)+(xmod2)
// P(x)=P(x&(x−1))+1;