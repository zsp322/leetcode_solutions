/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

// In-place写法
// 1->2->4, 1->3->4
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        ListNode dummy = new ListNode(-1);
        dummy.next = l1;

        ListNode cur = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                l1.next = l1;
            } else {
                ListNode nextNode = cur.next;
                cur.next = l2;
                ListNode temp = l2.next;
                l2.next = nextNode;
                l2 = temp;
            }

            cur = cur.next;
        }

        if (l1 != null) cur.next = l1;
        if (l2 != null) cur.next = l2;

        return dummy.next;
    }
}