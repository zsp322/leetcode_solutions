class Solution {
    public int shortestDistance(String[] words, String word1, String word2) {
        Map<String, List<Integer>> dic = new HashMap<>();
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            dic.put(word, dic.getOrDefault(word, new ArrayList<>()).add(i));
        }
        List<Integer> arr1 = dic.get(word1);
        List<Integer> arr2 = dic.get(word2);

        int shorestDis = Integer.MAX_VALUE;
        for (int num1 : arr1) {
            for (int num2 : arr2) {
                shorestDis = Math.min(Math.abs(num2 - num1));
            }
        }
        return shorestDis;
    }
}