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
    let tail = newHead;
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

const mergeTwoListsInPlace = function(head1, head2) {
    let dummy = new ListNode(-1);
    let cur = dummy;

    dummy.next = head1;

    while (head1 != null && head2 != null) {
        if (head1.val < head2.val) {
            head1 = head1.next;
        } else {
            let nextNode = cur.next;
            cur.next = head2;
            let temp = head2.next;
            head2.next = nextNode; //接上后半程的NODE
            head2 = temp;
        }
        cur = cur.next;
    }

    if (head1 != null) cur.next = head1;
    if (head2 != null) cur.next = head2;

    return dummy.next;
}