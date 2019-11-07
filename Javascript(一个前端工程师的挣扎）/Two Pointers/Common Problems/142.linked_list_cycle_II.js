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
// 复习一下原来做过的two-pointer的题目，这次思路很清楚，但是implementation有点卡壳，在第一个while loop上逻辑有点不清楚
// leetcode 287 用了同样的two-pointer的思路
var detectCycle = function(head) {
    if (head === null) return head;
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (fast === slow) {
            let newPtr = head;
            while (newPtr != slow) {
                newPtr = newPtr.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};