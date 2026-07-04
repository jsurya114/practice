let arr = [1, 2, 4, 6, 7, 9]

function missing(arr,n){
    let i=0
    let count=0
    let set = new Set(arr)
    while(true){
        i++
        if(!set.has(i)){
            count++
            if(count===n) return i
        }
    }
}

console.log(missing(arr,2))