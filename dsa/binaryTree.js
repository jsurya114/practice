class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}


class BST{
    constructor(){
        this.root=null
    }
    
    insert(value){
        const node = new Node(value)
        
        if(!this.root){
            this.root=node
            return
        }
        
        let queue=[this.root]
        while(queue.length){
            let curr = queue.shift()
            
            if(!curr.left){
                curr.left=node
                return
            }else{
                queue.push(curr.left)
            }
            
            if(!curr.right){
                curr.right=node
                return
            }else{
                queue.push(curr.right)
            }
        }
        
    }
    levelOrder(root){
        let queue = [root]
        while(queue.length){
            let curr = queue.shift()
            
            console.log(curr.value)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }
}


const bst = new BST()
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.levelOrder(bst.root)
