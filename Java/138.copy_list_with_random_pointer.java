/*
// Definition for a Node.
class Node {
    public int val;
    public Node next;
    public Node random;

    public Node() {}

    public Node(int _val,Node _next,Node _random) {
        val = _val;
        next = _next;
        random = _random;
    }
};
*/
class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) return head;

        HashMap<Node, Node> dic = new HashMap<>();
        Node dummy = new Node(-1);

        Node cur = head;
        Node newNodeCur = dummy;

        while (cur != null) {
            Node temp = new Node(cur.val);
            newNodeCur.next = temp;
            dic.put(cur, temp); // <old node, new node>

            cur = cur.next;
            newNodeCur = newNodeCur.next;
        }

        cur = head;
        newNodeCur = dummy.next;

        while (cur != null) {
            Node randomNode = cur.random;
            newNodeCur.random = dic.get(randomNode);

            cur = cur.next;
            newNodeCur = newNodeCur.next;
        }

        return dummy.next;
    }
}