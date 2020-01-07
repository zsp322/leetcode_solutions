/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
// 这道题的tricky part在于怎么对于奇偶不同长度的链表找到后半段的头结点
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null || head.next == null) return true;
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode fast = dummy;
        ListNode slow = dummy;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode newHead = reverse(slow.next);
        ListNode cur = head;
        while (newHead != null) {
            if (cur.val != newHead.val) return false;
            cur = cur.next;
            newHead = newHead.next;
        }
        return true;
    }

    public ListNode reverse(ListNode root) {
        if (root == null) return root;
        ListNode pre = null;
        while (root != null) {
            ListNode nextNode = root.next;
            root.next = pre;
            pre = root;
            root = nextNode;
        }
        return pre;
    }
}