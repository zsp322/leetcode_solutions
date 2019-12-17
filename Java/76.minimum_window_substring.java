class Solution {
    public String minWindow(String s, String t) {
        if (s == null || t == null) return "";

        HashMap<Character, Integer> hashmap = new HashMap<>();

        // Record how many unique characters in t

        for (int i = 0; i < t.length(); i++) {
            int count = hashmap.getOrDefault(t.charAt(i), 0);
            hashmap.put(t.charAt(i), count + 1);
        }

        int required = hashmap.size();
        int left = 0;
        int right = 0;
        int[] ans = {-1, 0, 0};
        int formed = 0;
        HashMap<Character, Integer> countMap = new HashMap<>();
        while (right < s.length()) {
            char curChar = s.charAt(right);

            // Step1: put this character into count map
            // Step2: check whether it satisfies the dicT
            // Step3: if not moving forward
            // Step3: if so, moving left pointer,
            int count = countMap.getOrDefault(curChar, 0);
            countMap.put(curChar, count + 1);

            if (hashmap.containsKey(curChar)
                    && hashmap.get(curChar).intValue() == countMap.get(curChar).intValue()) {
                formed++;
            }

            while (left <= right && formed == required) {
                curChar = s.charAt(left);
                if (ans[0] == -1 || right - left + 1 < ans[0]) {
                    ans[0] = right - left + 1;
                    ans[1] = left;
                    ans[2] = right;
                }

                countMap.put(curChar, countMap.get(curChar) - 1);
                if (hashmap.containsKey(curChar)
                        && countMap.get(curChar).intValue() < hashmap.get(curChar).intValue()) {
                    formed--;
                }
                left++;
            }
            right++;
        }

        return ans[0] == -1 ? "" : s.substring(ans[1], ans[2] + 1);


    }
}