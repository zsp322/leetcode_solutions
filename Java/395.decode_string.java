// 看到这个肯定想到的就是stack
// 每次看到数字，压数字进栈
// 一个数字栈，一个字母栈
class Solution {
    public String decodeString(String s) {
        if (s == null || s.length() == 0) return s;

        Stack<String> alphabets = new Stack<>();
        Stack<Integer> nums = new Stack<>();

        int idx = 0;

        while (idx < s.length()) {
            char curCharacter = s.charAt(idx);

            if (curCharacter > '0' && curCharacter <= '9') {
                String num = "";
                while (s.charAt(idx) >= '0' && s.charAt(idx) <= '9') {
                    num += s.charAt(idx);
                    idx++;
                };
                nums.push(Integer.parseInt(num));
                continue;
            } else if ((curCharacter >= 'a' && curCharacter <= 'z')
                    || (curCharacter >= 'A' && curCharacter <= 'Z')
                    || curCharacter == '[') {
                alphabets.push(Character.toString(curCharacter));
            } else if (curCharacter == ']' && !alphabets.isEmpty()) {
                String temp = "";
                while (!alphabets.peek().equals("[")) {
                    temp = alphabets.pop() + temp;
                }

                // temp.reverse();
                // poll out '['
                if (!alphabets.isEmpty()) alphabets.pop();


                String newStringComputed = "";
                if (!nums.isEmpty()) {

                    int repeatedTimes = nums.pop();

                    System.out.println("The number I get is" + repeatedTimes);
                    for (int i = 0; i < repeatedTimes; i++) {
                        newStringComputed += temp;
                    }
                }
                alphabets.push(newStringComputed);
            }
            idx++;
        }

        // System.out.println("Get here already");
        String res = "";
        while (!alphabets.isEmpty()) res = alphabets.pop() + res;

        return res;
    }
}