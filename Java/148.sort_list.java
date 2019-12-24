/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode sortList(ListNode head) {
        return mergeSortHelper(head);
    }

    public ListNode mergeSortHelper(ListNode head) {
      if (head == null || head.next == null) return head;

      ListNode slow = head;
      ListNode fast = head;
      ListNode prev = null; // 这个prev记录slow指针的上一位节点方法一开始没注意
      while (fast != null && fast.next != null) {
          prev = slow;
          slow = slow.next;
          fast = fast.next.next;
      }

      ListNode newHead = prev.next;
      prev.next = null;

      ListNode leftList = mergeSortHelper(head);
      ListNode rightList = mergeSortHelper(newHead);

      return merge(leftList, rightList);
    }

    public ListNode merge(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        ListNode newHead = new ListNode(-1);
        ListNode cur = newHead;
        while (l1 != null || l2 != null) {
            int val1 = l1 == null ? Integer.MAX_VALUE : l1.val;
            int val2 = l2 == null ? Integer.MAX_VALUE : l2.val;

            if (val1 < val2) {
                cur.next = new ListNode(val1);
                l1 = l1.next;
            } else {
                cur.next = new ListNode(val2);
                l2 = l2.next;
            }
            cur = cur.next;
        }
        return newHead.next;
    }
}

// Merge Sort Constant Space O(1)
// Bottom-up Merge Sort
// https://leetcode.com/problems/sort-list/discuss/46712/Bottom-to-up(not-recurring)-with-o(1)-space-complextity-and-o(nlgn)-time-complextity
class Solution {
      public ListNode sortList(ListNode head) {
          ListNode dummy = new ListNode(0);
          dummy.next = head;
          int n = 0;

          while (head != null) {
              head = head.next;
              n++;
          }
          for (int step = 1; step < n; step <<= 1) {
              ListNode prev = dummy;
              ListNode cur = dummy.next;

              while (cur != null) {
                  ListNode left = cur;
                  ListNode right = split(left, step);
                  cur = split(right, step);
                  prev = merge(left, right, prev);
              }
          }
          return dummy.next;
      }

      public ListNode split(ListNode head, int step) {
          if (head == null) return null;

          for (int i = 1; head.next != null && i < step; i++) {
              head = head.next;
          }
          ListNode right = head.next;
          head.next = null;
          return right;
      }
      public ListNode merge(ListNode left, ListNode right, ListNode prev) {
          ListNode cur = prev;
          while (left != null && right != null) {
              if (left.val < right.val) {
                  cur.next = left;
                  left = left.next;
              } else {
                  cur.next = right;
                  right = right.next;
              }
              cur = cur.next;
          }

          if (left != null) cur.next = left;
          else if (right != null) cur.next = right;
          while (cur.next != null) cur = cur.next;
          return cur;
     }
}
