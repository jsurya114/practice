class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class SingleList{
    constructor(){
        this.head=null
        this.size=0
    }
    prepend(value){
        const node = new Node(value)
        node.next=this.head
        this.head=node
        this.size++
    }
    append(value){
        const node = new Node(value)
        
        if(!this.head){
            this.head=node
            this.size++
            return
        }
        let curr = this.head
        while(curr.next){
            curr=curr.next
        }
        curr.next=node
        this.size++
    }
    addValue(index,value){
        const node = new Node(value)
        
        if(index===0){
            return this.prepend(value)
        }
        if(index===this.size) return this.append(value)
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        node.next=curr.next
        curr.next=node
        this.size++
        
    }
    
    remove(index){
        if(!this.head) return null
        
        if(index===0){
            this.head=this.head.next
            this.size--
            return
        }
        
        let curr = this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        curr.next=curr.next.next
        this.size--
    }

    removeMid(){
        if(!this.head) return null
        let mid = Math.floor(this.size/2)

        let curr = this.head
        for(let i=0;i<mid-1;i++){
            curr=curr.next
        }
        curr.next=curr.next.next
        this.size--
    }
    removeV(value){
        if(!this.head) return null
        
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return
        }
        let curr = this.head
        while(curr.next){
            if(curr.next.value===value){
                curr.next=curr.next.next
            }
            curr=curr.next
            this.size--
            return 
        }
    }
    swapMiddle(n){
        if(!this.head||n>this.size) return 
        let mid = Math.floor((this.size-n)/2)
        let curr = this.head
        for(let i=0;i<mid;i++){
            curr = curr.next
        }
        let temp =[]
        let next=curr
        for(let i=0;i<n;i++){
            temp.push(next.value)
            next = next.next
        }
        temp.reverse()
        next =curr
        for(let i=0;i<n;i++){
            next.value=temp[i]
            next=next.next
        }
    }
    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr=curr.next
        }
    }
}


const sl = new SingleList()
let arr = [1,2,3,4,5]
for(let i=0;i<arr.length;i++){
    sl.append(arr[i])
}
// sl.addValue(6,7)
sl.removeMid()
sl.print()