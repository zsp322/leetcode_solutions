
var firstUniqChar = function(s) {
    let datastream = new Datastream();
    for (let i = 0; i < s.length; i++) {
        datastream.add(s.charAt(i), i);
    }
    return datastream.findFirstUniqueChar();
};


class Datastream {
    constructor() {
        this.charToPrev = new Map();
        this.charToIndex = new Map();
        this.duplicateChars = new Set();
        this.dummy = new ListNode('.');
        this.tail = this.dummy;
    }

    add(c, index) {
        if (this.duplicateChars.has(c)) return;

        if (!this.charToIndex.has(c)) this.charToIndex.set(c, index);
        // If never shows up before, add this node to the back of linkedlist and update the map
        if (!this.charToPrev.has(c)) {
            let newNode = new ListNode(c);
            this.charToPrev.set(c, this.tail);
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }

        let prevNode = this.charToPrev.get(c);
        prevNode.next = prevNode.next.next; //Delete the node

        if (prevNode.next === null) {
            this.tail = prevNode;
        } else {
            this.charToPrev.set(prevNode.next.val, prevNode); // Update the node value to previous node
        }

        this.charToPrev.delete(c);
        this.duplicateChars.add(c);
    }

    findFirstUniqueChar() {
        if (this.dummy.next === null) return -1;
        let index = this.charToIndex.get(this.dummy.next.val);
        return index;
    }

}


const ListNode = function(val) {
    this.next = null;
    this.val = val;
}