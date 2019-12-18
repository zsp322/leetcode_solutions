class Solution {
    public int singleNumber(int[] nums) {
        if (nums == null) return 0;

        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                set.remove(num);
            } else {
                set.add(num);
            }
        }

        Iterator<Integer> i = set.iterator();
        return i.next().intValue();

    }
}

// 如果真的要考察这道题，想要的SOLUTION其实是BIT MANIPULATION
// A ^ A = 0 A ^ 0 = A A ^ A ^ B = B

class Solution {
    public int singleNumber(int[] nums) {
        if (nums == null) return 0;

        int res = 0;
        for (int num : nums) {
            res ^= num;
        }
        return res;
    }
}