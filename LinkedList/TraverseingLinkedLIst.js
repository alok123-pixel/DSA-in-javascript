class Node{
   constructor(data){
    this.data = data;
    this.next = null
   } 
}

function printList(head){
    let curr = head;
    while(curr !== null){
        console.log(curr.data)
        curr = curr.next;
    }
}

head = new Node(10)
head.next = new Node(20)
head.next.next =new Node(30)
head.next.next.next = new Node(40)
printList(head);