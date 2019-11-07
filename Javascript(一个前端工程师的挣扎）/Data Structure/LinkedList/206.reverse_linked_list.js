/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Iterative solution
var reverseList = function(head) {
    if (head === null) return head;

    let prev = null;
    while (head != null) {
        let nextNode = head.next;
        head.next = prev;

        prev = head;
        head = nextNode;

    }

    return prev;
};

// Recursive solution -- 这方法不好做，尽量少用
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}