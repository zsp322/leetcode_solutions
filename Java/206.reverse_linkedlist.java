/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
// Recursive
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode pre = null;
        ListNode cur = head;

        while (cur != null) {
            ListNode nextNode = cur.next;
            cur.next = pre;

            pre = cur;
            cur = nextNode;
        }

        return pre;
    }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        return reverseListHelper(head, null);
    }

    public ListNode reverseListHelper(ListNode head, ListNode pre) {
        if (head == null) return pre;

        ListNode nextNode = head.next;
        head.next = pre;
        return reverseList(nextNode, head);
    }
}