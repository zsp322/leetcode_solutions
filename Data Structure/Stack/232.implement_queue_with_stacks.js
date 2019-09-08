/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
    while (this.stack1.length > 0) {
        let ele = this.stack1.pop();
        this.stack2.push(ele);
    }
    this.stack1 = this.stack2; // Back to first;
    this.stack2 = [];
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};