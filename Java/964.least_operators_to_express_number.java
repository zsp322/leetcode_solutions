class Solution {
    Map<Integer, Integer> memo = new HashMap<>();
    public int leastOpsExpressTarget(int x, int target) {
        if (target == 1) 
            return x == 1 ? 0 : 1;
        if (memo.containsKey(target))
            return memo.get(target);
        long product = x;
        int count = 0;
        while (product < target) {
            count++;
            product *= x;
            
        }
        
        // candidate1 : in the form : x*x*...*x - (......) = target
        int cand1 = Integer.MAX_VALUE;
        if (product == target)
            cand1 = count;
        else if (product - target < target)
            cand1 = count + leastOpsExpressTarget(x, (int)(product - target)) + 1;
        
        // candidate2 : in the form : x*x*...*x + (......) = target
        int cand2 = Integer.MAX_VALUE;
        product /= x;
        cand2 = leastOpsExpressTarget(x, (int)(target - product)) + (count == 0 ? 2 : count);
        int res = Math.min(cand1, cand2);
        memo.put(target, res);
        return res;
    }
}