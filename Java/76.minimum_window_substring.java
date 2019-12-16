class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null) return "";

        int left = 0;
        int right = 0;
        String res = "";
        HashMap<Character, Integer> dic = new Map<>();
        HashMap<Character, Integer> characters = new Map<>();

        // Construct existing characters map
        for (int i = 0; i < t.length(); i++) {
            char curChar = t.charAt(i);
            if (characters.containsKey(curChar)) {
                characters.put(curChar, characters.get(curChar) + 1);
            } else {
                characters.put(curChar, 1);
            }
        }

        while (left < s.length()) {
            char curChar = s.charAt(right);
            if (dic.containsKey(curChar)) {
                dic.put(curChar, dic.get(curChar) + 1);
            } else {
                dic.put(curChar, 1);
            }
            while (left <= right && validCurPath(dic, characters)) {
                String subString = s.substring(left, right + 1);
                if (subString.length() < res.length() || res == "") res = subString;
                char leftChar = s.charAt(left);
                if (dic.get(leftChar) == 1) {
                    dic.remove(leftChar);
                } else {
                    dic.put(leftChar, dic.get(leftChar) - 1);
                }
                left++;
            }
            right++;
        }
    }

    public boolean validCurPath(HashMap<Character, Integer> dic, HashMap<Character, Integer> characters) {
        for (Character char : characters.keySet()) {
            if (!dic.containsKey(char)) return false;
            if (dic.get(char) != characters.get(char)) return false;
        }
        return true;
    }
}