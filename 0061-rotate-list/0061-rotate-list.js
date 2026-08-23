/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let curr = head;
    let length = 1;
    let tail = head;


    while(tail.next !== null){
        tail = tail.next;
        length++;
    }

    tail.next = head;
    let finalK = k % length;
    let steps = length - finalK;
    
    let newTail = tail;
    while(steps > 0){
        newTail = newTail.next;
        steps--;
    }
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};