var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow pointer by one
        fast = fast.next.next;     // Move fast pointer by two

        if (slow === fast) {
            return true; // Cycle detected
        }
    }
    return false; // No cycle
};