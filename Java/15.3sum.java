class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        Arrays.sort(nums);
        // System.out.println(Arrays.toString(nums));
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int left = i + 1;
            int right = nums.length - 1;
            while (left < right) {
                // 一开始是放在这里去重，但这个思路是不对的，因为去重的意义对于同一个INDEX, 找其TWO SUM SOLUTION, 要去除重复的 TWO SUM SOLUTION
                // 所以找到一个SOLUTION之后跳过所有的重复SOLUTION
                // while (left + 1 < right && nums[left + 1] == nums[left]) left++;
                // while (left + 1 < right && nums[right - 1] == nums[right]) right--;
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    List<Integer> temp = new ArrayList();
                    temp.add(nums[i]);
                    temp.add(nums[left]);
                    temp.add(nums[right]);
                    res.add(temp);

                    while (left + 1 < right && nums[left + 1] == nums[left]) left++;
                    while (left + 1 < right && nums[right - 1] == nums[right]) right--;

                    left++;
                    right--;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return res;
    }
}