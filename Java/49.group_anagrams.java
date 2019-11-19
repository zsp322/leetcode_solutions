//Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//        Output:
//        [
//        ["ate","eat","tea"],
//        ["nat","tan"],
//        ["bat"]
//        ]

// Hashmap/Hashstring method
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        if (strs == null || strs.length == 0) return res;

        HashMap<String, List<String>> dic = new HashMap<>();
        for (int i = 0; i < strs.length; i++) {
            String curWord = strs[i];
            char[] tempArr = curWord.toCharArray();
            Arrays.sort(tempArr);
            String standardWord = new String(tempArr);

            // 这里还是出了Bug，初始化的时候忘记加自己进去
//            if (dic.containsKey(standardWord)) {
//                List<String> tempList = dic.get(standardWord);
//                if (!tempList.contains(strs[i])) {
//                    tempList.add(curWord);
//                }
//                dic.put(standardWord, tempList);
//            } else {
//               dic.put(standardWord, new ArrayList<>());
//            }

            if (!dic.containsKey(standardWord)) dic.put(standardWord, new ArrayList<>());
            dic.get(standardWord).add(curWord);
        }

        for (List<String> value : dic.values()) {
            res.add(new ArrayList(value));
        }
        // dic.forEach((k, v) -> res.add(new ArrayList(v)));

        return res;
    }
}

// Hashstring Count
// Time Complexity： O（NK)
// SPACE COMPLEXITY: O(NK)
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        if (strs == null || strs.length == 0) return res;

        HashMap<String, List<String>> dic = new HashMap<>();

        for (String str : strs) {
            int[] count = new int[26];

            char[] tempArr = str.toCharArray();
            for (char character : tempArr) {
                count[character - 'a']++;
            }

            String hashString = "";
            for (int i = 0; i < count.length; i++) {
                hashString += i;
                for (int j = 0; j < count[i]; j++) {
                    hashString += '#';
                }
            }

            if (!dic.containsKey(hashString)) dic.put(hashString, new ArrayList<>());
            dic.get(hashString).add(str);
        }

        return new ArrayList<List<String>>(dic.values());
    }
}