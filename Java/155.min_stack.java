// 用2个STACK,一个存储最小值，一个存储所有值
// MIN STACK里存储的是对于当前ELEMENT的最小值
// 需要记忆的算法
class MinStack {
    Stack<Integer> stack;
    Stack<Integer> minStack;

    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int x) {
        stack.push(x);
        if (minStack.isEmpty()) {
            minStack.push(x);
        } else {
            minStack.push(Math.min(x, minStack.peek()));
        }
    }

    public int pop() {
        minStack.pop();
        return stack.pop();
    }

    public int top() {
        return stack.peek();
    }
    public int getMin() {
        return minStack.peek();
    }
}



// Discuss 神仙解法，跟上面的解法效率一样的
class MinStack {
    Stack<Integer> stack;
    int min = Integer.MAX_VAL;
    /** initialize your data structure here. */
    public MinStack() {
        stack = new Stack<>();
    }

    public void push(int x) {
        if (x <= min) {
            stack.push(min);
            min = x;
        }
    }

    public void pop() {
        if (stack.peek() == min) min = stack.pop();
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return min;
    }
}