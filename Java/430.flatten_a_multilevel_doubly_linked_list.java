// Basic idea is straight forward:

// Start form the head , move one step each time to the next node
// When meet with a node with child, say node p, follow its child chain to the end and connect the tail node with p.next, by doing this we merged the child chain back to the main thread
// Return to p and proceed until find next node with child.
// Repeat until reach null
class Solution {
    public Node flatten(Node head) {
        if( head == null) return head;
	// Pointer
        Node p = head; 
        while( p!= null) {
            /* CASE 1: if no child, proceed */
            if( p.child == null ) {
                p = p.next;
                continue;
            }
            /* CASE 2: got child, find the tail of the child and link it to p.next */
            Node temp = p.child;
            // Find the tail of the child
            while( temp.next != null ) 
                temp = temp.next;
            // Connect tail with p.next, if it is not null
            temp.next = p.next;  
            if( p.next != null )  p.next.prev = temp;
            // Connect p with p.child, and remove p.child
            p.next = p.child; 
            p.child.prev = p;
            p.child = null;
        }
        return head;
    }
}

public Node flatten(Node head) {
        if (head == null) return null;
        flattentail(head);
        return head;
    }
    
    public Node flattentail(Node current) {
        if (current.child != null){
            Node childtail = flattentail(current.child);
            childtail.next = current.next;
            if (current.next != null){
                current.next.prev = childtail;
            }
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
            
        }        
        if (current.next == null){
            return current;
        }
        return flattentail(current.next);
    }
}