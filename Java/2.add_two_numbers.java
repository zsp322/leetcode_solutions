// Date: 2019-11-07
// LinkedList/细节题

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        ListNode dummy = new ListNode(-1);
        ListNode head = dummy;
        boolean carryOne = false;
        while (l1 != null || l2 != null) {
            int value1 = l1 == null ? 0 : l1.val;
            int value2 = l2 == null ? 0 : l2.val;
            int sum = value1 + value2 + (carryOne ? 1 : 0);

            if (sum >= 10) {
                sum -= 10;
                carryOne = true;
            } else {
                carryOne = false; // 这里一开始也漏了，忘记要把CARRYONE还原
            }

            head.next = new ListNode(sum);
            head = head.next;
            if (l1 != null) l1 = l1.next; // 这里写的时候忘记加CHECK条件了，后来debug的时候用的是.NEXT != NULL,形成了新的BUG
            if (l2 != null) l2 = l2.next;
        }

        if (carryOne) head.next = new ListNode(1);

        return dummy.next;
    }
}