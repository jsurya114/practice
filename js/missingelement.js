//optimal solution
let arr = [2, 5, 1, 4];
function missingelement(arr){
    let n = arr.length+1

    let map =new Set(arr)
     let res =[]
    for(let i=1;i<=n;i++){
        if(!map.has(i)){
            res.push(i)
        }
    }
    return arr
}

console.log(missingelement(arr))
