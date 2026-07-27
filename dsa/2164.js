function sortevenodd(arr){
    let even =[]
    let odd=[]

    for(let i=0;i<arr.length;i++){
        if(i%2===0){
            even.push(arr[i])
        }else{
            odd.push(arr[i])
        }
    }

    even.sort((a,b)=>a-b)
    odd.sort((a,b)=>b-a)

    let e=0
    let o=0
    for(let i=0;i<arr.length;i++){
        if(i%2===0){
            arr[i]=even[e++]
        }else{
            arr[i]=odd[o++]
        }
    }
    return arr
}
let arr=[4,1,2,3]
console.log(sortevenodd(arr))