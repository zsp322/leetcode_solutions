class Solution {
    // State machine -- dp[i] represents the total value if ith slot is taken
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        int maxVal = Integer.MIN_VALUE;
        int[] dpCellOneIsTaken = new int[nums.length];
        int[] dpCellOneIsNotTaken = new int[nums.length];

        dpCellOneIsTaken[0] = nums[0];
        dpCellOneIsTaken[1] = nums[0];

        for (int i = 2; i < nums.length; i++) {
            if (i == nums.length - 1) {
                dpCellOneIsTaken[i] = dpCellOneIsTaken[i - 1];
            } else {
                dpCellOneIsTaken[i] = Math.max(dpCellOneIsTaken[i - 1], dpCellOneIsTaken[i - 2] + nums[i]);
            }
        }

        dpCellOneIsNotTaken[0] = 0;
        dpCellOneIsNotTaken[1] = nums[1];

        for (int i = 2; i < nums.length; i++) {
            dpCellOneIsNotTaken[i] = Math.max(dpCellOneIsNotTaken[i - 1], dpCellOneIsNotTaken[i - 2] + nums[i]);
        }

        return Math.max(dpCellOneIsNotTaken[dpCellOneIsNotTaken.length - 1], dpCellOneIsTaken[dpCellOneIsTaken.length - 1]);
    }
}