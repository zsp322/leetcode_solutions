
class ListNode {
    constructor(key, val) {
        this.val = val;
        this.key = key
        this.count = 1;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = new ListNode(-1, -1);
        this.tail = new ListNode(-1, -1);
        this.size = 0;

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    addNode(node) {
        node.prev = this.head;
        node.next = this.head.next;

        this.head.next.prev = node;
        this.head.next = node;
    }
    removeNode(node) {
        // console.log(node)
        let prev = node.prev;
        let nextNode = node.next;

        prev.next = nextNode;
        nextNode.prev = prev;
    }
    popTail() {
        let res = this.tail.prev;
        this.removeNode(res);
        return res;
    }
}
var LFUCache = function(capacity) {
    this.dic = new Map();
    this.countMap = new Map();

    this.curSize = 0;
    this.capacity = capacity;
    this.minFreq = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.dic.has(key)) return -1;

    let node = this.dic.get(key);
    this.updateNode(node);
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    let node = this.dic.get(key);
    if (node === null || node === undefined) {
        this.curSize++;

        if (this.curSize > this.capacity) {
            let minFreqList = this.countMap.get(this.minFreq);
            let popedNode = minFreqList.popTail();

            this.dic.delete(popedNode);
            this.curSize--;
        }

        this.minFreq = 1; // Add a new node
        node = new ListNode(key, value);

        if (!this.countMap.has(this.minFreq)) {
            this.countMap.set(this.minFreq, new doublyLinkedList());
        }

        this.countMap.get(this.minFreq).addNode(node);
        this.dic.set(key, node);

    } else {
        node.val = value;
        this.updateNode(node)
    }
};

// updateNode需要做的事情：
// 更新NODE的frequency
// 更新COUNTMAP，更新minFreq

LFUCache.prototype.updateNode = function(node) {
    let frequency = node.count;
    let frequencyNodeList = this.countMap.get(frequency); //Doubly LinkedList

    if (frequency === this.minFreq && frequencyNodeList.length === 1) {
        this.minFreq++;
        this.countMap.delete(frequency); //Delete this frequency list
    }

    frequencyNodeList.removeNode(node); // Delete the node from frequency list
    node.count++;

    if (!this.countMap.has(node.count)) {
        this.countMap.set(node.count, new doublyLinkedList());
    }
    this.countMap.get(node.count).addNode(node);

}