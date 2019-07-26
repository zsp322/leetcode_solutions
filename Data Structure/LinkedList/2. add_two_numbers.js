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

// 二刷
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
    if (l1 === null && l2 === null) return l1;

    let temp1 = l1;
    let temp2 = l2;
    let res = new ListNode(-1);
    let temp3 = res;

    let carryone = 0;

    while (temp1 !== null || temp2 !== null) {
        let num1 = temp1 === null ? 0 : temp1.val;
        let num2 = temp2 === null ? 0 : temp2.val;

        let sum = num1 + num2 + carryone;

        // Decrement 10 if needed
        if (sum >= 10) {
            sum -= 10;
            carryone = 1;
        } else carryone = 0;

        temp3.next = new ListNode(sum);
        temp3 = temp3.next;
        // There is a logic bug here for first implementation, when list is in end
        if (temp1 !== null) temp1 = temp1.next;
        if (temp2 !== null)temp2 = temp2.next;

    }

    if (carryone === 1) temp3.next = new ListNode(1);
    return res.next;


};