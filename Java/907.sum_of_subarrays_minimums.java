class Solution {
    public int sumSubarrayMins(int[] A) {
        Stack<Integer> previousLess = new Stack<>(); //Monotous Increasing Stack
        Stack<Integer> nextLess = new Stack<>(); //Monotous Increasing Stack

        int[] left = new int[A.length];
        int[] right = new int[A.length];

        for (int i = 0; i < A.length; i++) {
            while (!previousLess.isEmpty() && A[previousLess.peek()] >= A[i]) {
                previousLess.pop();
            }

            left[i] = previousLess.isEmpty() ? i + 1 : i - previousLess.peek();
            previousLess.push(i);
        }

        for (int i = A.length - 1; i >= 0; i--) {
            while (!nextLess.isEmpty() && A[nextLess.peek()] > A[i]) {
                nextLess.pop();
            }

            right[i] = nextLess.isEmpty() ? A.length - i : nextLess.peek() - i;
            nextLess.push(i);
        }

        int ans = 0;
        int mod = 1000000007;

        for (int i = 0; i < A.length; i++) {
            ans = (ans + A[i] * left[i] * right[i]) % mod;
        }

        return ans;
    }
}