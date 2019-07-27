// 二刷这道题目，其实还算是蛮简单的HARD题目，基本上就是用了MERGE SORT的基本思想去MERGE linkedlist
// 亮点1： recursively merge two linked list
// 亮点2:  Merge Sort divide and conquer idea
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeKLists = function(lists) {
    if (lists === null) return lists;
    return mergeKListHelper(lists, 0, lists.length - 1);

}


const mergeKListHelper = function(lists, low, high) {
    if (lists === null || lists.length === 0) return lists;

    if (low === high) return lists[low]; // The specifc head you need to merge them back

    const mid = Math.floor((low + high) / 2);
    const left = mergeKLists(lists, low, mid);
    const right = mergeKLists(lists, mid + 1, high);

    return mergeTwoLinkedList(left, right);

}


// Recursive Solution
const mergeTwoLinkedList = function(head1, head2) {
    if (head1 === null || head2 === null) return head1 === null ? head2 : head1;


    // Basically which one is smaller stays the same and move the pointer to next element and once it's done, put them back
    if (head1.val < head2.val) {
        head1.next = mergeTwoLinkedList(head1.next, head2);
        return head1;
    } else {
        head2.next = mergeTwoLinkedList(head1, head2.next);
        return head2;
    }
}