class UndoRedo{
    constructor(){
        this.undoStack=[]
        this.redoStack=[]
        this.current=""
    }

    perform(action){
        this.undoStack.push(this.current)
        this.current=action
        this.redoStack=[]
    }

    undo(){
        if(this.undoStact.length===0) return 

        this.redoStack.push(this.current)
        this.current=this.undoStack.pop()
    }

    redo(){
        if(this.redoStack.length===0) return 
        this.undoStack.push(this.current)
        this.current=this.redoStack.pop()
    }
}

const editor = new UndoRedo()


editor.perform("A");
editor.perform("AB");
editor.perform("ABC");
editor.print()

editor.undo()
editor.print()
editor.redo()
editor.print()
