// Date: 11-18-2019
// Tag: Two Pointers

class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int res = 0;
        int maxLeft = Integer.MIN_VALUE;
        int maxRight = Integer.MIN_VALUE;

        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            int leftHeight = height[left];
            int rightHeight = height[right];

            if (leftHeight < rightHeight) {
                maxLeft = Math.max(leftHeight, maxLeft);
                res += (maxLeft - leftHeight);
                left++;
            } else {
                maxRight = Math.max(rightHeight, maxRight);
                res += (maxRight - rightHeight);
                right--;
            }
        }

        return res;
    }
}

// Dynamic Programming Solution
// Time Complexity: O(3n) => O(n)
// Space Complexity: O(n)
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int res = 0;

        int[] leftMax = new int[height.length];
        leftMax[0] = 0;
        for (int i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(height[i - 1], leftMax[i - 1]);
        }

        int[] rightMax = new int[height.length];
        rightMax[rightMax.length - 1] = 0;

        for (int i = height.length - 2; i >=0; i--) {
            rightMax[i] = Math.max(height[i + 1], rightMax[i + 1]);
        }

        for (int i = 0; i < height.length; i++) {
            int min = Math.min(leftMax[i], rightMax[i]);

            if (min <= height[i]) continue;
            else res += height[i] - min;
        }

        return res;
    }
}

// Stack Solution
// 这个SOLUTION不是那么熟练
// Time COMPLEXITY: O(N)
// Space COMPLEXITY: O(N)
class Solution {
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;
        int res = 0;

        Stack<Integer> stack = new Stack<>();

        int current = 0;
        while (current < height.length) {
            while (!stack.isEmpty() && height[current] > height[stack.peek()]) {
                int top = stack.pop();
                if (stack.isEmpty()) break;

                int distance = current - stack.peek() - 1;
                int bound = Math.min(height[current], height[stack.peek()]) - height[top];
                res += bound * distance;
            }
            stack.push(current++);
        }

        return res;
    }
}