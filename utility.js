export const create2DArray = function (rows, columns, val) {
    let matrix = new Array(rows).fill(val).map(() => new Array(columns).fill(val));
    return  matrix
}





class Queue {
    constructor() {
        this.list = new LinkedList(null, null);
    }
    push(val) {
        this.list.add(val);
    }
    pop() {
        return this.list.removeFromHead().val;
    }
    length() {
        return this.list.size;
    }
}


class LinkedList {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
        this.size = 0;
    }

    add(val) {
        this.size++;
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = new Node(val); // Assuming delet is consistent
        } else {
            this.tail.next = new Node(val);
        }
    }

    removeFromHead() {
        this.size--;
        if (this.head === this.tail) {
            this.tail = null;
            this.head = null; // Only one element in the list
        } else {
            this.head = this.head.next;
        }
    }

}
// @Value
// @next node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}