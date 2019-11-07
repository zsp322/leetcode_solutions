
var reverseKGroup = function(head, k) {
    if (head === null || head.next === null) return head;
    var dummy = new ListNode(-1);
    dummy.next = head;

    var prev = dummy;
    var cur = head;

    while (cur != null) {
        var tempCur = cur;

        for (let i = 1; i < k; i++) {
            tempCur = tempCur.next;

            if (tempCur === null) return dummy.next;
        }

        let nextStart = tempCur.next;
        tempCur.next = null;

        prev.next = reverseList(cur, null);
        cur.next = nextStart;

        prev = cur;
        cur = nextStart;
    }

    return dummy.next;
};







const reverseList = function(head, newHead) {
    if (head === null) return newHead;

    let nextNode = head.next;

    head.next = newHead;

    return reverseList(nextNode, head);
}