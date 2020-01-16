class Solution {
    int count = 0;
    public int pathSum(TreeNode root, int sum) {
        if (root == null) return 0;
        pathSumHelper(root, new int[0], sum);
        return count;
    }

    public void pathSumHelper(TreeNode root, int[] nums, int target) {
        if (root == null) return;
        if (root.val == target) count++;

        int[] nextLevelNum = new int[nums.length + 1];
        nextLevelNum[nextLevelNum.length - 1] = root.val;

        for (int i = 0; i < nums.length; i++) {
            int curSum = root.val + nums[i];
            if (curSum == target) count++;
            nextLevelNum[i] = curSum;
        }


        int[] copiedArr = nextLevelNum.clone();
        pathSumHelper(root.left, nextLevelNum, target);
        pathSumHelper(root.right, copiedArr, target);
    }

}


// HASHMAP解法跟上面这个解法是一样的，但是会省SPACE
// 先写比较简单的solution
class Solution {
    int count = 0;
    public int pathSum(TreeNode root, int sum) {
        if (root == null) return 0;
        dfsHelper(root, sum, new HashMap<>(), 0);
        return count;
    }

    public void dfsHelper(TreeNode root, int sum, HashMap<Integer, Integer> map, int curSum) {
       if (root == null) return;

       curSum += root.val;

       if (map.containsKey(curSum - sum)) count++;

       if (map.containsKey(curSum)) {
           map.put(curSum, map.get(curSum) + 1);
       } else {
           map.put(curSum, 1);
       }

       dfsHelper(root.left, sum, map, curSum);
       dfsHelper(root.right, sum, map, curSum);
       map.put(curSum, map.get(curSum) - 1);
    }
}

// Hashmap avoid GLOBAL VARIABLE
// 比较经典的左子树值 + 右子树值
class Solution {
    public int pathSum(TreeNode root, int sum) {
        HashMap<Integer, Integer> preSum = new HashMap();
        preSum.put(0,1);
        return helper(root, 0, sum, preSum);
    }

    public int helper(TreeNode root, int currSum, int target, HashMap<Integer, Integer> preSum) {
        if (root == null) {
            return 0;
        }

        currSum += root.val;
        int res = preSum.getOrDefault(currSum - target, 0);
        preSum.put(currSum, preSum.getOrDefault(currSum, 0) + 1);

        res += helper(root.left, currSum, target, preSum) + helper(root.right, currSum, target, preSum);
        preSum.put(currSum, preSum.get(currSum) - 1);
        return res;
    }
}