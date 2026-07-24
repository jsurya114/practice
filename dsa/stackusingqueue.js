class StackUsingQueue{
    constructor(){
        this.q1=[]
        this.q2=[]
    }

    push(x){
        this.q1.push(x)
    }
    pop(){
        if(this.q1.length===0) return null

        while(this.q1.length>1){
            this.q2.push(this.q2.shift())
        }

        let pop = this.q1.shift()
        let temp = this.q1
        this.q1=this.q2
        this.q2=temp
        return pop
    }

    peek(){
          if(this.q1.length===0) return null
          while(this.q1.length>0){
            this.q2.push(this.q1.shift())
          }

          let top = this.q1.shift()
          this.q2.push(top)
         let temp = this.q1
        this.q1=this.q2
        this.q2=temp
        return top

    }
    print(){
        console.log([...this.q1].reverse().join("-"))
    }

}