const arr = [3, 1, 1, 2, 3, 3, 1, 2, 2];


const removed = arr.filter((val,ind)=>val!==arr[ind-1])

console.log(removed)



let res = []

for(let i=0;i<arr.length;i++){
    if(i===0||arr[i]!==arr[i-1]){
        res.push(arr[i])
    }        
}

console.log(res)


let stack =[]
for(let val of arr){
    if(stack.length&&stack[stack.length-1]===val){
        stack.pop()
    }else{
        stack.push(val)
    }
}
console.log(stack)