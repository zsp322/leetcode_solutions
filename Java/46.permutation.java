class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        if (nums == null || nums.length == 0) return res;

        dfsHelper(res, new ArrayList<>(), new HashSet(nums), nums.length);
    }

    public void dfsHelper(List<List<Integer>> res,
                          List<Integer> curPath,
                          HashSet<Integer> leftNums,
                          int totalLength) {
        if (curPath.size() == totalLength) {
            res.add(new ArrayList<Integer>(curPath));
        } else {
            Iterator<Integer> iterator = leftNums.iterator();
            while (iterator.hasNext()) {
                String next = iterator.next();
                curPath.add(next);
                leftNums.remove(next);
                dfsHelper(res, curPath, leftNums, totalLength);
                leftNums.add(next);
                curPath.remove(curPath.size() - 1);
            }
        }
    }
}