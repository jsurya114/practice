let user = { name: 'Jayasurya', age: 22 }

let handler ={
    get(target,key){
        console.log("user's:",target[key])
        return target[key]
    },
    set(target,key,value){
        if(key==="age"&& key<0){
            console.log("invalid entry")
            return false
        }
        target[key]=value
        return true
    }

}

let proxy = new Proxy(user,handler)

proxy.name