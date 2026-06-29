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
        if(this.root===null){
            return this.root=node
        }else{
            this.inserNode(this.root,node)
        }
    }
    inserNode(root,node){
        if(root.value>node.value){
            if(root.left===null){
                root.left=node
                return
            }else{
                this.inserNode(root.left,node)
            }
        }else{
            if(root.right===null){
               root.right=node
               return
            }else{
                this.inserNode(root.right,node)
            }
        }
    }

     inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
    preorder(root){
        if(root){
            console.log(root.value)
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }

    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root) return null

        if(root.value>value){
            root.left=this.deleteNode(root.left,value)
        }else if(root.value<value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.left) return null

            if(!root.left) return root.right
            if(!root.right) return root.left

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    search(root,target){
        if(!root) return null
        if(root.value===target) return true
        if(root.value>target) return this.search(root.left,target)
        else return this.search(root.right,target)
    }

    
}