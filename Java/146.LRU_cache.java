// Least Frequency LRU Cache
// Doubly LinkedList -> 从尾部删除NODE,每次更新value，移除NODE,加入头部
// Dictionary for <Integer, Integer> store regular <key, value> pair
// Dictionary for <Integer, Node> store regular <key, Node> pair
class LRUCache {
    private HashMap<Integer, Integer> dic;
    private HashMap<Integer, Node> dicForNodes;
    private DoublyLinkedList list;
    private int size = 0;

    public LRUCache(int capacity) {
        this.dic = new HashMap<>();
        this.dicForNodes = new HashMap<>();
        this.list = new DoublyLinkedList();
        this.size = capacity;
    }

    public int get(int key) {
        if (!dic.containsKey(key)) return -1; // Not Found;
        Node nodeToKey = dicForNodes.get(key);
        list.moveToFront(nodeToKey);
        return dic.get(key);
    }

    public void put(int key, int value) {
        if (!dic.containsKey(key)) {
            if (dic.size() >= size) {
                Node tailNode = list.removeFromTail();
                dic.remove(tailNode.key);
                dicForNodes.remove(tailNode.key);
            }
            Node newNode = new Node(key, value);
            list.addToFront(newNode);
            dicForNodes.put(key, newNode);
        } else {
            Node curNode = dicForNodes.get(key);
            curNode.val = value;
            list.moveToFront(curNode);
        }
        dic.put(key, value);
    }
}

class Node {
    int val;
    int key;
    Node next;
    Node prev;
    public Node (int key, int val) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    Node head;
    Node tail;
    public DoublyLinkedList() {
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    public void removeNode(Node node) {
        Node prevNode = node.prev;
        Node nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    public void addToFront(Node node) {
        Node prevHeadNode = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = prevHeadNode;
        prevHeadNode.prev = node;
    }
    public void moveToFront(Node node) {
        removeNode(node);
        addToFront(node);
    }
    public Node removeFromTail() {
        Node tailNode = this.tail.prev;
        removeNode(tailNode);
        return tailNode;
    }


}
/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */