// Date: 11/12/2019
// Tag: LinkedList/Merge Sort
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;
        return mergeSort(lists, 0, lists.length - 1);
    }

    public ListNode mergeSort(ListNode[] lists, int start, int end) {
        if (start == end) return lists[start];
        int mid = (start + end) / 2;

        ListNode leftList = mergeSort(lists, start, mid);
        ListNode rightList = mergeSort(lists, mid + 1, end);

        return merge(leftList, rightList);

    }

    public ListNode merge(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        ListNode dummy = new ListNode(-1);
        dummy.next = l1;

        ListNode cur = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                l1 = l1.next;
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