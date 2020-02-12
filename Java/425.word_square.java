// Naive approach solving this problem with simple hashmap mechanism


class Solution {
    public int size;
    public List<List<String>> wordSquares(String[] words) {
        size = words[0].length();
        List<List<String>> res = new ArrayList<>();
        HashMap<String, List<String>> map = new HashMap<>();
        dfsHelper(res,
                new ArrayList<>(),
                words,
                new HashMap<String, List<String>>());

        return res;
    }

    public void dfsHelper(List<List<String>> res,
                          List<String> curPath,
                          String[] words,
                          HashMap<String, List<String>> map
    ) {
        if (curPath.size() == size) {
            res.add(new ArrayList<>(curPath));
        } else {
            int curIdx = curPath.size();
            String prefix = "";
            for (String curWord : curPath) {
                prefix += curWord.charAt(curIdx);
            }
            List<String> nextWords = findWordsInThisPrefixWithCache(words, prefix, map); // 每次调用这个函数的效率都是


            // List<String> nextWords = findWordsInThisPrefixWithTrie()
            for (String nextWord : nextWords) {
                curPath.add(nextWord);
                dfsHelper(res, curPath, words, map);
                curPath.remove(curPath.size() - 1);
            }
        }
    }
    // hashmap优化法，每次搜过的prefix都存起来
    // 运算效率的数量级不发生改变，但是效率提升
    public List<String> findWordsInThisPrefixWithCache(String[] words,
                                                       String prefix,
                                                       HashMap<String, List<String>> map) {
        if (map.containsKey(prefix)) return map.get(prefix);

        List<String> res = new ArrayList<>();

        for (String word : words) {
            boolean isValid = true;
            for (int i = 0; i < prefix.length(); i++) {
                if (prefix.charAt(i) != word.charAt(i)) {
                    isValid = false;
                }
            }
            if (isValid) res.add(word);
        }
        map.put(prefix, res);
        return res;
    }

}


class Trie {
    public TrieNode root;
    public Trie(String[] words) {
        this.root = new TrieNode("", false);

        for (String word : words) {
            buildTrieTree(word);
        }
    }

    public void buildTrieTree(String word) {
        TrieNode cur = root;
        for (int i = 0; i < word.length(); i++) {
            char currentCharacter = word.charAt(i);
            int index = currentCharacter - 'a';
            boolean isWord = i == word.length() - 1;

            if (cur.children[index] == null) {
                cur.children[index] = new TrieNode(currentCharacter, isWord);
            }
            cur = cur.children[index];
        }
    }

    public List<String> findWordsMatchingWithPrefix(String prefix) {
        TreeNode cur = root;

        for (int i = 0; i < prefix.length(); i++) {
            char currentCharacter = word.charAt(i);
            int index = currentCharacter - 'a';

            if (cur.children[index] == null) return null; // Not exisiting
            cur = cur.children[index];
        }

        // 这个地方是我习惯的trie结构会出问题的地方,找到了prefix的点后，怎么compute所有符合条件的单词
        List<String> res = new ArrayList<>();
        buildAllResults(res, prefix, cur);
        return res;
    }

    public void buildAllResults(List<String> res, String curPath, TrieNode cur) {
        if (cur.isWord) {
            res.add(curPath);
        }

        TrieNode childrens = cur.children;
        for (TrieNode child : childrens) {
            if (child == null) continue;
            curPath += child.value;

            buildAllResults(res, curPath, child);
            curPath.subString(0, curPath.length() - 1); //remove last character
        }
    }
}

class TrieNode {
    public String value;
    public TrieNode[] children;
    public boolean isWord;

    public TrieNode(String value, boolean isWord) {
        this.value = value;
        this.isWord = isWord;
    }
}

