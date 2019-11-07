/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (head === null) return head;
    
    let dic = new Map();
    let newHead = new Node(head.val, null, null);
    
    let cur1 = head;
    let cur2 = newHead
    
    dic.set(head, newHead);
    dic.set(null, null);  // Edge case
    
    while (cur1.next != null) {
        cur2.next = new Node(cur1.next.val, null, null);
        cur1 = cur1.next;
        cur2 = cur2.next;
        
        dic.set(cur1, cur2);
        
    }
    
    let cur = newHead;
    
    while (head != null) {
        cur.random = dic.get(head.random);
        cur = cur.next;
        head = head.next;
    }
    
    return newHead;
};