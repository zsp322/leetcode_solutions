/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Divide and Conquer
var mergeKLists = function(lists) {
   if (lists === null || lists.length === 0) return null;
   return mergeHelper(lists, 0, lists.length - 1);
};

// Basic Divide and Conquer 写法
const mergeHelper = function (lists, start, end) {
    if (start === end) return lists[start];

    let mid = Math.floor((start + end) / 2);
    let left = mergeHelper(lists, start,  mid);
    let right = mergeHelper(lists, mid + 1, end);
    return mergeTwoLists(left, right);
}
const mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode(-1);
    let cur = newHead;
    let cur1 = list1;
    let cur2 = list2;

    while (cur1 != null && cur2 != null) {
        if (cur1.val < cur2.val) {
            tail.next = cur1;
            cur1 = cur1.next;
            tail = tail.next;
        } else {
            tail.next = cur2;
            cur2 = cur2.next;
            tail = tail.next;
        }
    }

    if (cur1 != null) tail.next = cur1;

    if (cur2 != null) tail.next = cur2;


    return newHead.next;
}