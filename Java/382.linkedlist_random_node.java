/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    private ListNode head;
    private Random random;
    /** @param head The linked list's head.
    Note that the head is guaranteed to be not null, so it contains at least one node. */
    public Solution(ListNode head) {
        this.head = head;
        this.random = new Random();
    }

    /** Returns a random node's value. */
    public int getRandom() {
        ListNode cur = head;
        int nodeVal = cur.val;
        for (int i = 1; cur.next != null; i++) {
            cur = cur.next;
            nodeVal = (random.nextInt(i + 1) == i) ? cur.val : nodeVal;
        }

        return nodeVal;
    }
}
