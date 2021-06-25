class Solution {
    public int goodNodes(TreeNode root) {
        return goodNodes(root, -10000);
    }

    public int goodNodes(TreeNode root, int ma) {
        if (root == null) return 0;
        int res = root.val >= ma ? 1 : 0;
        res += goodNodes(root.left, Math.max(ma, root.val));
        res += goodNodes(root.right, Math.max(ma, root.val));
        return res;
    }
}


找一个array里面的最小值, 只要改初始值就可以了, 注意这里只能改一行.

这题简单，统计负数的次数，如果碰到0就提前退出了

3. B - 4
4. E.More than few hours
5. B. if (x & 1)
6. checking whether the number 42 is in the array
7. B-tree
8. The number of all possible permutations of a given list n!
9. 1
10. for any array of size N, f(A)[N-1]=max(A)
11. BFS
12 O(nlogn)