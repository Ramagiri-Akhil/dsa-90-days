function hasCycle(head){
    let f1 = head;
    let f2 = head;
    while( f2 !== null && f2.next !== null){
        f1 = f1.next;
        f2 = f2.next.next;
        if( f1 === f2){
            return true;
        }
    }
    return false;
}