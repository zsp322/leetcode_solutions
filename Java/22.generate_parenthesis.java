class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<>();
        if (n <= 0) return res;
        dfsHelper(res, "", n, 0);
        return res;
    }

    public void dfsHelper(List<String> res, String curPath, int n, int openBracket) {
        // System.out.println(curPath);
        if (curPath.length() == n * 2) {
            // 这里写的还是有BUG,没注意到这里可能会LEAK出去
            // 还是要多花时间研究题目本身
            if (openBracket == 0) {
                res.add(curPath);
            }
        } else {
            if (openBracket > 0) {
                dfsHelper(res, curPath + ')', n, openBracket - 1);
            }
            dfsHelper(res, curPath + '(', n, openBracket + 1);
        }
    }
}