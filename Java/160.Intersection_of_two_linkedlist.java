/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;

        ListNode cur = headA;
        int sizeA = 0;

        while (cur != null) {
            cur = cur.next;
            sizeA++;
        }

        cur = headB;
        int sizeB = 0;

        while (cur != null) {
            cur = cur.next;
            sizeB++;
        }

        ListNode cur1 = headA;
        ListNdde cur2 = headB;
        int sizeDifferent = Math.abs(sizeA - sizeB);
        if (sizeA < sizeB) {
            for (int i = 0 ; i < sizeDifferent; i++) {
                cur2 = cur2.next;
            }
        } else {
            for (int i = 0 ; i < sizeDifferent; i++) {
                cur1 = cur1.next;
            }
        }

        while (cur1 != null && cur2 != null) {
            if (cur1 == cur2) return cur1;
            else {
                cur1 = cur1.next;
                cur2 = cur2.next;
            }
        }
        return null;
    }
}

// Trick Solution
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;

        ListNode a = headA;
        ListNode b = headB;

        while (a != b) {
            a = a == null ? headB : a.next;
            b = b == null ? headA : b.next;
        }

        return a;
    }
}
