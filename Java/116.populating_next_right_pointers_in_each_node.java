class Solution {
    public Node connect(Node root) {
        if (root == null) return root;
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);


        while (!queue.isEmpty()) {
            int size = queue.size();
            Node prev = null;
            for (int i = 0; i < size; i++) {
                Node cur = queue.poll();
                if (prev != null) prev.next = cur;

                if (cur.left != null) queue.add(cur.left);
                if (cur.right != null) queue.add(cur.right);

                prev = cur;
            }
        }

        return root;
    }
}


// Saving space complexity :O(1) space
class Solution {
    public Node connect(Node root) {
        if (root == null) return root;
        Node cur = root;

        while (cur != null) {
            Node leftMost = cur.left;
            Node head = leftMost;
            while (head != null) {
                cur.left.next = cur.right;
                head = head.next;
                if (cur.next != null) cur.right.next = cur.next.left;
                head = head.next;
                cur = cur.next;
            }
            cur = leftMost;
        }

        return root;
    }
}

class Solution {
    public Node connect(Node root) {

        if (root == null) {
            return root;
        }

        // Start with the root node. There are no next pointers
        // that need to be set up on the first level
        Node leftmost = root;

        // Once we reach the final level, we are done
        while (leftmost.left != null) {

            // Iterate the "linked list" starting from the head
            // node and using the next pointers, establish the
            // corresponding links for the next level
            Node head = leftmost;

            while (head != null) {

                // CONNECTION 1
                head.left.next = head.right;

                // CONNECTION 2
                if (head.next != null) {
                    head.right.next = head.next.left;
                }

                // Progress along the list (nodes on the current level)
                head = head.next;
            }

            // Move onto the next level
            leftmost = leftmost.left;
        }

        return root;
    }
}