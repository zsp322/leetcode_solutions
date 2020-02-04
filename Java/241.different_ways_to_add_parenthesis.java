// + , - , *
// 不能老想着看答案，要多自己想想怎么解，是代码实现起来有困难，还是思路不清楚
// 最原始的做法： 穷举所有括号组合，存成STRING数组
// 对每个string进行操作计算结果
// "2 + 4 * 3 + 2"
// Divide and Conquer + DFS with Memorization
class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == '+'
                    || input.charAt(i) == '-'
                    || input.charAt(i) == '*') {
                String leftString = input.substring(0, i);
                String rightString = input.substring(i + 1, input.length());

                List<Integer> leftNums = diffWaysToCompute(leftString);
                List<Integer> rightNums = diffWaysToCompute(rightString);


                for (Integer leftNum : leftNums) {
                    for (Integer rightNum : rightNums) {
                        res.add(cal(leftNum, rightNum, input.charAt(i)));
                    }
                }
            }
        }
        if (res.size() == 0) res.add(Integer.valueOf(input));
        return res;
    }

    public int cal(int leftNum, int rightNum, char opperand) {
        if (opperand == '+') return leftNum + rightNum;
        if (opperand == '-') return leftNum - rightNum;
        return leftNum * rightNum;

    }
}


// With cache mechanism
class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        HashMap<String, List<Integer>> cache = new HashMap<>();

        return diffWaysToComputeHelper(cache, input);
    }

    public List<Integer> diffWaysToComputeHelper(HashMap<String, List<Integer>> cache, String input) {
        if (cache.containsKey(input)) return cache.get(input);

        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == '+'
                    || input.charAt(i) == '-'
                    || input.charAt(i) == '*') {
                String leftString = input.substring(0, i);
                String rightString = input.substring(i + 1, input.length());

                List<Integer> leftNums = diffWaysToComputeHelper(cache, leftString);
                List<Integer> rightNums = diffWaysToComputeHelper(cache, rightString);


                for (Integer leftNum : leftNums) {
                    for (Integer rightNum : rightNums) {
                        res.add(cal(leftNum, rightNum, input.charAt(i)));
                    }
                }
            }
        }
        if (res.size() == 0) res.add(Integer.valueOf(input));
        cache.put(input, res);
        return res;
    }

    public int cal(int leftNum, int rightNum, char opperand) {
        if (opperand == '+') return leftNum + rightNum;
        if (opperand == '-') return leftNum - rightNum;
        return leftNum * rightNum;

    }
}