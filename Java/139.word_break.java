// Intuitive DFS Solution
// 做一个注释，这个简单的解法写的有点磕绊，解法本身会超时
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        HashSet<String> dic = new HashSet<>();
        HashSet<String> valid = new HashSet<>();
        for (String word : wordDict) {
            dic.add(word);
        }

        return dfsHelper(s, dic, 0, visited, "");
    }
    public boolean dfsHelper(String s, HashSet<String> dic, int index, HashSet<String> visited, String cur) {
        if (index == s.length()) return true;
        String remainingString = s.substring(index, s.length());
        if (visited.contains(remainingString)) return true;

        boolean res = false;
        for (int i = index; i <= s.length(); i++) {
            String tempWord = s.substring(index, i);
            if (dic.contains(tempWord)) {
                res = res || dfsHelper(s, dic, i, visited, cur + tempWord);
            }
        }
        return res;
    }
}

// BFS Solution
// 不知道为啥这个解法写了半天才解出来
// BFS剪枝的方法还是要记得的

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        int[] visited = new int[s.length()];

        HashSet<String> dic = new HashSet<>();
        for (String word : wordDict) {
            dic.add(word);
        }

        while (!queue.isEmpty()) {
            int index = queue.poll();

            if (visited[index] == 0) {
                for (int end = index + 1; end <= s.length(); end++) {
                    if (dic.contains(s.substring(index, end))) {
                        if (end == s.length()) return true;
                        queue.add(end);
                    }
                }
            }
            visited[index] = 1;
        }
        return false;
    }
}
