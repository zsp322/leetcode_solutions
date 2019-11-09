// Date: 2019-11-07
// TAG: Hashmap
class Solution {
    public int[] twoSum(int[] nums, int target) {

        int[] result = new int[2];
        if (nums == null || nums.length == 0) return result;

        HashMap<Integer, Integer> dic = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = target - nums[i];
            if (dic.containsKey(num)) {
                result[0] = dic.get(num);
                result[1] = i;
                return result;
            } else {
                dic.put(nums[i], i);
            }
        }

        return result;
    }
}