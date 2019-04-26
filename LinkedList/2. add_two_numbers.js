/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);  // Dummy;
    let cur = dummy; // Iterator node
    let carry = 0;
    while (l1 != null || l2 != null || carry != 0) {
        let n1, n2;
        if (l1 != null) {
            n1 = l1.val;
            l1 = l1.next;
        } else {
            n1 = 0;
        }
        
        if (l2 != null) {
            n2 = l2.val;
            l2 = l2.next;
        } else {
            n2 = 0
        }

        let sum = n1 + n2 + carry;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else carry = 0;

        let temp = new ListNode(sum);
        cur.next = temp;
        cur = cur.next;
        
    }

    return dummy.next;
};