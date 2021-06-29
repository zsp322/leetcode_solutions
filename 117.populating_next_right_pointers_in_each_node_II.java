// 难点在于用O(1) Space
class Solution {
    public Node connect(Node root) {
        while (root != null) {
            TreeLinkNode tempChild = new TreeLinkNode(0);
            TreeLinkNode currentChild = tempChild;

            while (root != null) {
                if (root.left != null) {
                    currentChild.next = root.left;
                    currentChild = currentChild.next;
                }
                if (root.right != null) {
                    currentChild.next = root.right;
                    currentChild = currentChild.next;
                }

                root = tempChild.next;
            }
        }
    }
}