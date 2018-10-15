/**
 * Question 1: Two Sum
 * Solved Strategy: Hashmap
 * Date: 09/26/2018
 * Description: First time use javascript solve leetcode
 * Learn map structure in javascript
 * Understand how the object literal and hashing in Javascript
 * It was smart to use l2 == null thing to avoid lots of if-else statements
 */


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
    var res = new ListNode(-1);    //dummy node
    var head = res;
    var one = 0;


    while (l1 != null || l2 != null || one != 0 ) {
        var sum = ((l1 == null) ? 0 : l1.val) + ((l2 == null) ? 0 : l2.val) + one;    // sum stays in the loop
        if (sum >= 10) {
            sum -= 10;  // makes sum - 10
            one = 1;    //make addition equals to 1;
        } else {
            one = 0;
        }
        res.next = new ListNode(sum);
        res = res.next;

        l1 = (l1 == null) ? l1 : l1.next;
        l2 = (l2 == null) ? l2 : l2.next;


    }




    return head.next;
};
