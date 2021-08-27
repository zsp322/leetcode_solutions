public class Solution {
    
    //based on level order traversal
    public void connect(TreeLinkNode root) {
        TreeLinkNode head = null; // head of next level
        TreeLinkNode prev = null; // the leading node on the next level
        TreeLinkNode cur = root; // current node on the current level

        while (cur != null) {
            while (cur != null) {
                if (cur.left != null) {
                    if (prev != null) {
                        prev.next = cur.left;
                    } else {
                        head = cur.left;
                    }
                    prev = cur.left;
                }

                if (cur.right != null) {
                    if (prev != null) {
                        prev.next = cur.right;
                    } else {
                        head = cur.right;
                    }
                    prev = cur.right;
                }

                cur = cur.next;
            }

            cur = head;
            head = null;
            prev = null;
        }
    }
}