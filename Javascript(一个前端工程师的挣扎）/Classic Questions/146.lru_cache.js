// Tag: Hashtable/Hashmap
// Diffculty: Hard
// https://leetcode.com/problems/lru-cache/discuss/134851/ES6-Javascript-O(1)-one-Map-fewest-lines-of-code
// 心得: Javascript的map存在time order的顺序排列，每次get和put都将其去除，然后再重新加入即可更新其timestamp，但这个是javascript的专有解法，面试的时候一定不是interviewer想要的解法
/**
 * @param {number} capacity
 */
// LRU的正常解法，doubly linked list和hashmap的结合， 每次get,或者put一个值，将其从linkedlist的拿出，加入链表头部
// 当reach maximum时候，将尾端抛出，从hashmap减掉

/**
 * @param {number} capacity
 */
class ListNode {
    constructor(val, key) {
        this.val = val;
        this.key = key;
        this.next = null;
        this.prev = null;
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
    this.linkedList = new doublyLinkedList();
    this.capacity = capacity;
    
    this.linkedList.head = new ListNode();
    this.linkedList.tail = new ListNode();
    
    this.linkedList.head.next = this.linkedList.tail;
    this.linkedList.tail.prev = this.linkedList.head; //It's smart to do this way
    
};


// Always add node right after head
LRUCache.prototype.addNode = function(node) {
    node.prev = this.linkedList.head;
    node.next = this.linkedList.head.next;
    
    this.linkedList.head.next.prev = node;
    this.linkedList.head.next = node;
};


LRUCache.prototype.removeNode = function(node) {
    let prev = node.prev;
    let nextNode = node.next;
    
    prev.next = nextNode;
    nextNode.prev = prev;
};

LRUCache.prototype.moveTohead = function(node) {
    this.removeNode(node);
    this.addNode(node);
};

LRUCache.prototype.popTail = function() {
    let res = this.linkedList.tail.prev;
    this.removeNode(res);
    return res;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
     if (!this.dic.has(key)) return -1;
     
     let node = this.dic.get(key);
     this.moveTohead(node);
     return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
   let node = this.dic.get(key);
   
   if (node === null || node === undefined) {
       node = new ListNode(value, key);
       this.dic.set(key, node);
       this.addNode(node);
       this.linkedList.size++;
       
       if(this.linkedList.size > this.capacity) {
           let tail = this.popTail();
           this.dic.delete(tail.key);
           this.linkedList.size--;
       }
   } else {
       node.val = value;
       this.moveTohead(node);
   }
};



// JS Specific Solution
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