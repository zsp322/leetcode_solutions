class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<ListNode> stack1 = new Stack<>();
        Stack<ListNode> stack2 = new Stack<>();
        
        while (l1 != null) {
            stack1.push(l1);
            l1 = l1.next;
        }
        
        while (l2 != null) {
            stack2.push(l2);
            l2 = l2.next;
        }
        
        int carry = 0;
        ListNode dummy = new ListNode(-1);
        ListNode head = null;
        while (!stack1.isEmpty() || !stack2.isEmpty()) {
            int cur1 = stack1.isEmpty() ? 0 : stack1.pop().val;
            int cur2 = stack2.isEmpty() ? 0 : stack2.pop().val;
            
            int sum = cur1 + cur2 + carry;
            
            if (sum >= 10) {
                sum -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            
            ListNode nextNode = new ListNode(sum);
            nextNode.next = head;
            head = nextNode;
        }
        
        if (carry == 1) {
            ListNode nextNode = new ListNode(1);
            nextNode.next = head;
            head = nextNode;
        }
        
        return head;
    }
}