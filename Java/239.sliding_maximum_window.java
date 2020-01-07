// 简单的HASHMAP解法
// 我自己的解法是有问题的，每次都没有好好想清楚就提笔做了
// Deque解法
// Time Ccomplexity： O(N)
// Space Ccomplexity： O（N）
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) return nums;

        Deque<Integer> deque = new ArrayDeque<>();
        int[] res = new int[nums.length - k + 1];
        int ri = 0;

        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.getFirst() < i - k + 1) deque.pollFirst();
            while (!deque.isEmpty() && nums[deque.getLast()] < nums[i]) deque.pollLast();

            deque.offer(i);

            // 这里是保证i要大于K-1，前k-1个数不会被take into consideration
            if (i >= k - 1) {
                res[ri++] = nums[deque.peek()];
            }
        }

        return res;
    }
}

// Ddynamic Programming
// 这个solution没那么重要相对于DEQUE解法来说，但是GOOD TO KNOW
// Time Complexity： O(N)
// Space Complexity： O(N)
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) return nums;

        int n = nums.length;
        int[] left = new int[n];
        int[] right = new int[n];

        left[0] = nums[0];
        right[n - 1] = nums[n - 1];

        for (int i = 1; i < n; i++) {
            if (i % k == 0) left[i] = nums[i];
            else left[i] = Math.max(left[i - 1], nums[i]);
            int j = n - i - 1;
            if ((j + 1) % k == 0) right[j] = nums[j];
            else right[j] = Math.max(right[j + 1], nums[j]);
        }

        int[] output = new int[n - k + 1];
        for (int i = 0; i < n - k + 1; i++) {
            output[i] = Math,max[left[i + k - 1], right[i]];
        }

        return output;
    }
}