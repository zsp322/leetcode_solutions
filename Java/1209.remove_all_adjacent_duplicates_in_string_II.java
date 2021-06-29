public String removeDuplicates(String s, int k){
    int len = s.length();
    Stack<Node> stack = new Stack<>();

    for (char c : s.toCharArray()) {
        if (!stack.isEmpty() && stack.peek().c == c) {
            stack.peek().count++;
        } else {
            stack.push(new Node(c, 1));
        }

        if (stack.peek().count == k) stack.pop();
    }

    StringBuilder sb = new StringBuilder();

    for (Node node : stack) {
        for (int i = 0; i < node.count; i++) {
            sb.append(node.c);
        }
    }

    return sb.toString();
}

class Node{
    char c;
    int count;
    public Node(char c, int count){
        this.c=c;
        this.count=count;
    }
}

public String removeDuplicates(String s, int k) {
    Stack<Integer> counts = new Stack<>();
    char[] sa = s.toCharArray();
    int j = 0;
    for (int i = 0; i < s.length(); ++i, ++j) {
        sa[j] = sa[i];
        if (j == 0 || sa[j] != sa[j - 1]) {
            counts.push(1);
        } else {
            int incremented = counts.pop() + 1;
            if (incremented == k) {
                j = j - k;
            } else {
                counts.push(incremented);
            }
        }
    }
    return new String(sa, 0, j);
}