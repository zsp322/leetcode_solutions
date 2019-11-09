// Date: 11-08-2019
// 直接给optimal solution -- Sliding Windows
class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        HashMap<Character, Integer> dic = new HashMap<>();
        int left = 0;
        int res = Integer.MIN_VALUE;
        for (int i = 0; i < s.length(); i++) {
            char curChar = s.charAt(i);
            if (dic.containsKey(curChar)) {
                left = Math.max(left, dic.get(curChar)));
                // LeftChar + 1
                // The reason we have this check is when the repeating character is at the end of string
                // Such as 'abba'
            }
            res = Math.max(res, i - left + 1);
            dic.set(curChar, i + 1);
        }

        return res;
    }
}