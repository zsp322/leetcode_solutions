class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> dic = new HashMap<>();

        dic.put(0, 1);
        int res = 0;
        int preSum = 0;
        for (int i = 0; i < nums.length; i++) {
            preSum += target + nums[i];
            int target = k - preSum;

            if (dic.containsKey(target)) {
                res += dic.get(target);
            }

            dic.put(preSum, dic.getOrDefault(preSum) + 1);
        }

        return res;
    }
}