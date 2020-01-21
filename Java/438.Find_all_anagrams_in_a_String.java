class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        HashMap<Character, Integer> dic = new HashMap<>();
        for (int i = 0; i < p.length(); i++) {
            if (!dic.containsKey(p.charAt(i))) {
                dic.put(p.charAt(i), 1);
            } else {
                dic.put(p.charAt(i), dic.get(p.charAt(i)) + 1);
            }
        }

        int target = dic.size();
        int left = 0;
        int right = 0;
        int count = 0;

        List<Integer> res = new ArrayList<>();
        HashMap<Character, Integer> mapForCurrentCharacters = new HashMap<>();

        while (right < s.length()) {
            char c = s.charAt(right);

            if (dic.containsKey(c)) {
                dic.put(c, dic.get(c) - 1);
                if (dic.get(c) == 0) target--;
            }

            right++;

            while (target == 0) {
                char tempc = s.charAt(left);
                if (dic.containsKey(tempc)) {
                    dic.put(tempc, dic.get(tempc) + 1);
                    if (dic.get(tempc) > 0) target++;
                }

                if (right - left == p.length()) {
                    res.add(left);
                }
                left++;
            }
        }
        return res;
    }
}