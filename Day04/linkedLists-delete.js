const deleteNode = function(node){
    // .next is a pointer to a node structure and indicates the next item in the list
    nextNode = node.next;
    
    // The node.val property sets or returns the value of a node
    // setting the node value to the variable nextNode
    node.val = nextNode.val;
    
    // Referring to the next node
    node.next = nextNode.next;

    // setting nextNode to null to have no value
    nextNode.next = null;

    //delete - bye
    delete(nextNode);
};


// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**