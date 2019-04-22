// Tag: Hashtable/Hashmap
// Diffculty: Hard
// https://leetcode.com/problems/lru-cache/discuss/134851/ES6-Javascript-O(1)-one-Map-fewest-lines-of-code
// 心得: Javascript的map存在time order的顺序排列，每次get和put都将其去除，然后再重新加入即可更新其timestamp，但这个是javascript的专有解法，面试的时候一定不是interviewer想要的解法
/**
 * @param {number} capacity
 */
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