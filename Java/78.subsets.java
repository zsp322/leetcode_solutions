class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        dfs(res, new ArrayList<>(), nums, -1);
        return res;
    }

    public void dfs(List<List<Integer>> res, List<Integer> curPath, int[] nums, int curIdx) {
        res.add(new ArrayList<>(curPath));
        for (int i = curIdx + 1; i < nums.length; i++) {
            curPath.add(nums[i]);
            dfs(res, curPath, nums, i);
            curPath.remove(curPath.size() - 1);
        }
    }
}