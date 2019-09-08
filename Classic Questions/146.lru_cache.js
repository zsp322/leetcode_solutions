// Tag: Hashtable/Hashmap
// Diffculty: Hard
// https://leetcode.com/problems/lru-cache/discuss/134851/ES6-Javascript-O(1)-one-Map-fewest-lines-of-code
// 心得: Javascript的map存在time order的顺序排列，每次get和put都将其去除，然后再重新加入即可更新其timestamp，但这个是javascript的专有解法，面试的时候一定不是interviewer想要的解法
/**
 * @param {number} capacity
 */
    // LRU的正常解法，doubly linked list和hashmap的结合， 每次get,或者put一个值，将其从linkedlist的拿出，加入链表头部
    // 当reach maximum时候，将尾端抛出，从hashmap减掉
    // 从hashmap存prev to val，这样每次get, put的时候，可以O(1)的方式delete

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.prevToCur = new Map()
    this.valToNode = new Map();
    this.dic = new Map();
    this.linkedList = new doublyLinkedList();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
     if (!this.dic.has(key)) return -1;

     // head node
     if (!this.prevToCur.has(key)) {
         return dic.get(key); //Since it's already the head node
     }

     let prevNode = this.prevToCur.get(key);
     prevNode.next = prevNode.next.next;

     if (prevNode === this.linkedList.tail) {
         this.linkedList.tail
     }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.dic.has(key)) {
        this.dic.set(key, value);
        moveToTheFront();
    }

    if (this.linkedList.size === this.capacity) {
        let prev = this.prevToCur.get(this.linkedList.tail.val);
        prev.next = null;
        this.linkedList.tail = prev; // Update from tail
    } else {

        let node = new ListNode(key);
        dic.set(key, val);
        this.prevToCur(node, this.linkedList.head);
        this.linkedList.head = node;
        if (this.linkedList.tail === null) this.linkedList.tail = node;
        this.linkedList.size++;
    }
};

const moveToTheFront = function() {

}



class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}















var LRUCache = function(capacity) {
    this.dic = new Map();
    this.size = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.dic.has(key)) {
        let res = this.dic.get(key);
        this.dic.delete(key);
        this.dic.set(key, res);
        return res;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.dic.has(key)) this.dic.delete(key);
    
    this.dic.set(key, value);
    
    let keys = this.dic.keys();
    
    if (this.dic.size > this.size) {
        this.dic.delete(keys.next().value);
    }
    
};