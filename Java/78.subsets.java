class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<ArrayList<>>();
        if (nums == null) return res;
        dfsHelper(res, new ArrayList<>(), nums, 0);
        return res;
    }
    public void dfsHelper(List<List<Integer>> res, List<Integer> curPath, int[] nums, int curIdx) {
        if (curPath.size() == nums.length) {
            res.add(new ArrayList<>(curPath));
        } else {
            for (int i = curIdx + 1; i < nums.length; i++) {
                res.add(new ArrayList<>(curPath));
                curPath.add(nums[i]);
                dfsHelper(res, curPath, nums, i);
                curPath.remove(curPath.size() - 1);
            }
        }
    }
}