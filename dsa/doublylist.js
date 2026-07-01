class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class DoublyList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head=this.tail=node
            this.size++
            return
        }
        node.next=this.head
        this.head.prev=node
        this.head=node
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head=this.tail=node
            this.size++
            return
        }
        node.prev=this.tail
        this.tail.next=node
        this.tail=node
        this.size++
    }

    insertAt(index,value){
        const node  = new Node(value)
        if(index<=0) return this.prepend(value)
        if(index===this.size) return this.append(value)
           
            let curr = this.head
            for(let i=0;i<index;i++){
                curr=curr.next
            }
         node.prev=curr.prev
         node.next=curr.next
         curr.prev.next=node
         curr.prev=node
         this.size++
    }

    removeAt(index){
        if(index<=0){
            this.head=this.head.next
            this.head.prev=null
            this.size--
            return
        }
        if(index===this.size-1){
            this.tail=this.tail.prev
            this.tail.next=null
            this.size--
            return
        }
        let curr =this.head
        for(let i=0;i<index;i++){
            curr = curr.next
        }
        curr.prev.next=curr.next
        curr.next.prev=curr.prev
        this.size--
    }
    swapMiddle(){
        if(!this.head) return null
        let mid = Math.floor(this.size/2)
        let curr =this.head
        for(let i=0;i<mid-1;i++){
            curr =curr.next
        }
        let node1 = curr
        let node2 = curr.next
        let temp = node1.value
        node1.value=node2.value
        node2.value = temp
        return temp
    }
       print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
} 

const dl = new DoublyList()
let arr = [1,2,3,4,5]
for(let val of arr){
    dl.append(val)
}
dl.insertAt(5,6)
dl.insertAt(6,7)
dl.removeAt(4)
dl.print()