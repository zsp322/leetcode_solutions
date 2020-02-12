// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211
// 7.     13112221
// 8.     1113213211

class Solution {
    public String countAndSay(int n) {
        if (n < 1) return "";
        String curr = "1";
        for (int i = 1; i < n; i++) {
            curr = computeNext(curr);
        }
        return curr;
    }

    public String computeNext(String previousString) {
        char prevChar = previousString.charAt(0);
        int count = 1;
        StringBuilder tmp = new StringBuilder();

        for (int j = 1; j < previousString.length(); j++) {
            char currChar = previousString.charAt(j);

            if (currChar != prevChar) {
                tmp.append(count);
                tmp.append(prevChar);
                count = 0;
                prevChar = currChar;
            }
            count++;
        }

        tmp.append(count);
        tmp.append(prevChar);
        return tmp.toString();
    }
}