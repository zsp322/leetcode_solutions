// Date: 11/12/2019
// Tag: Stack
class Solution {
    public boolean isValid(String s) {
        if (s == null || s.length() == 0) return true;

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char curCharacter = s.charAt(i);

            if (curCharacter == '(' || curCharacter == '[' || curCharacter == '{') {
                stack.push(curCharacter);
            } else {
                if (stack.isEmpty()) return false; // 漏了一个地方，这是个逻辑Bug,这么简单的题目，面试的时候出这种错误一定是会挂我的
                char characterOnTop = stack.pop(); // 每次去POP STACK的时候还是应该多想想，如果STACK为空怎么办

                if (curCharacter == ')' && characterOnTop != '(') return false;
                if (curCharacter == ']' && characterOnTop != '[') return false;
                if (curCharacter == '}' && characterOnTop != '{') return false;
            }
        }

        return stack.isEmpty();
    }
}