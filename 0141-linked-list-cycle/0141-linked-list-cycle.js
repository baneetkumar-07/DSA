var hasCycle = function(head) {
    
    let curr = head;
    let visited = new Set();

    while(curr !==null){
        if(visited.has(curr)){
            return true;
        }
        visited.add(curr);
        curr = curr.next;
    }
    return false
};