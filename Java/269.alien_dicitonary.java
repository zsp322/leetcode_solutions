class Solution {
    public String alienOrder(String[] words) {
        HashMap<Character, List<Character>> dependencyMap = new HashMap<>();
        HashMap<Character, Integer> degree = new HashMap<>();


        for(String s: words){
            for(char c: s.toCharArray()){
                degree.put(c,0);
            }
        }

        for (int i = 1; i < words.length; i++) {
            String prevWord = words[i - 1];
            String curWord = words[i];

            int shortestLength = Math.min(prevWord.length(), curWord.length());

            for (int j = 0; j < shortestLength; j++) {
                char prevChar = prevWord.charAt(j);
                char curChar = curWord.charAt(j);
                if (prevChar == curChar) continue;
                else {
                    degree.put(curChar, degree.getOrDefault(curChar, 0) + 1);
                    degree.put(prevChar, degree.getOrDefault(prevChar, 0));
                    List<Character> prevCharNeighbors = dependencyMap.getOrDefault(prevChar, new ArrayList<>());
                    prevCharNeighbors.add(curChar);
                    dependencyMap.put(prevChar, prevCharNeighbors);
                    break;
                }
            }
        }

        // After build dependency/degree hashmap, start from degree 0 nodes
        Queue<Character> queue = new LinkedList<>();
        for (Map.Entry<Character, Integer> eachCharacter: degree.entrySet()) {
            if (eachCharacter.getValue() == 0) queue.add(eachCharacter.getKey());
        }
        int totalAlphabets = degree.size();

        List<Character> res = new ArrayList<>();
        while (!queue.isEmpty()) {
            char curCharacter = queue.poll();
            res.add(curCharacter);

            if (!dependencyMap.containsKey(curCharacter)) continue;
            for (Character nextCharacter : dependencyMap.get(curCharacter)) {
                degree.put(nextCharacter, degree.get(nextCharacter) - 1);

                if (degree.get(nextCharacter) == 0) queue.add(nextCharacter);
            }
        }

        // System.out.println(returnedString);
        if (res.size() != totalAlphabets) return "";

        String returnedString = "";
        for (Character curChar : res) {
            returnedString += curChar;
        }

        System.out.println(returnedString);
        return returnedString;
    }
}