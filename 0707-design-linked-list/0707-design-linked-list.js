class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        // Dummy head to handle edge cases easily
        this.head = new ListNode(0);
        this.size = 0;
    }

    /** 
     * Get the value of the index-th node. If invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        
        let curr = this.head.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    /** 
     * Add a node of value val before the first element.
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /** 
     * Append a node of value val as the last element.
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /** 
     * Add a node of value val before the index-th node.
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) return;
        if (index < 0) index = 0;

        this.size++;
        let pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }

        let toAdd = new ListNode(val);
        toAdd.next = pred.next;
        pred.next = toAdd;
    }

    /** 
     * Delete the index-th node, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;

        this.size--;
        let pred = this.head;
        for (let i = 0; i < index; i++) {
            pred = pred.next;
        }

        pred.next = pred.next.next;
    }
}
