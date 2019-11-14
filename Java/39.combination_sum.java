// Date: 11-13-2019
// Tag: Backtracking
class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<>();

        if (candidates == null || candidates.length == 0) return res;
        Arrays.sort(candidates);
        List<Integer> path = new ArrayList<>();
        dfsHelper(res, path, candidates, 0, 0, target);
        return res;
    }

    public void dfsHelper(List<List<Integer>> res,
                          List<Integer> curPath,
                          int[] candidates,
                          int curIdx,
                          int curSum,
                          int target) {
        if (curSum > target) return;
        else if (curSum == target) {
            // System.out.println(curPath.toString());
            res.add(new ArrayList<>(curPath));
        } else {
            for (int i = curIdx; i < candidates.length; i++) {
                curPath.add(candidates[i]);
                dfsHelper(res, curPath, candidates, i, curSum + candidates[i], target);
                curPath.remove(curPath.size() - 1);
            }
        }
    }
}
