class Solution {
    Map<Character, String> dic = new HashMap<Character, String>();
    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList<>();
        if (digits == null || digits.length() == 0) return res;

        dic.put('2', "abc");
        dic.put('3', "def");
        dic.put('4', "ghi");
        dic.put('5', "jkl");
        dic.put('6', "mno");
        dic.put('7', "pqrs");
        dic.put('8', "tuv");
        dic.put('9', "wxyz");
        dfsHelper(res, digits, 0, "");
        return res;

    }

    public void dfsHelper(List<String> res, String digits, int curIdx, String curString) {
        if (curIdx == digits.length()) {
            res.add(curString);
        } else {
            char[] availableCharacters = dic.get(digits.charAt(curIdx)).toCharArray();
            for (char curChar : availableCharacters) {
                dfsHelper(res, digits, curIdx + 1, curString + curChar);
            }
        }
    }
}