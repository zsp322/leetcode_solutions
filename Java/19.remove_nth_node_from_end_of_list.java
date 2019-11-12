// Date: 11/12/2019
// Tag: LinkedList

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head == null) return head;

        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode slow = dummy;
        ListNode fast = dummy;

        for (int i = 0; i < n; i++) {
            fast = fast.next;
        }

        // 这个一开始写的时候有个小BUG,没有写.NEX，
        // 自己DEBUG没查出来，还是要专注一点
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return dummy.next;
    }
}