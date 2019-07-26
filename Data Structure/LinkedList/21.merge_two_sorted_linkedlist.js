
// 二刷，这道题跟TWO SUM一样熟了都
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let newHead = dummy;
    let cur1 = l1;
    let cur2 = l2;

    // When they say merge two lists, are they mean in-place merging?
    // Deep copy or Shallow Copy?
    while (cur1 != null || cur2 != null) {
        let val1 = cur1 === null ? Number.MAX_SAFE_INTEGER : cur1.val;
        let val2 = cur2 === null ? Number.MAX_SAFE_INTEGER : cur2.val;

        if (val1 < val2) {
            newHead.next = cur1;
            newHead = newHead.next;
            cur1 = cur1.next;
        } else {
            newHead.next = cur2;
            newHead = newHead = newHead.next;
            cur2 = cur2.next;
        }
    }

    return dummy.next;
};