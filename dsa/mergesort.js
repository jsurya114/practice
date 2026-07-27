function mergesort(arr){

    if(arr.length<=1) return arr
    let mid = Math.floor(arr.length/2)

    let left = mergesort(arr.slice(0,mid))
    let right=mergesort(arr.slice(mid))

    return merge(arr,left,right)
}


function merge(arr,left,right){

    let i=0
    let j=0
    let result =[]

    while(i<left.length&&j<right.length){
        if(right[j]>left[i]){
            result.push(left[i++])
        }else{
            result.push(right[j++])
        }
    }

    while(i<left.length){
        result.push(left[i++])
    }
    while(j<right.length){
        result.push(right[j++])
    }

    return result
}

function sortorder(arr){
    let temp =[]

    for(let i=0;i<arr.length;i+=2){
        temp.push(arr[i])
    }

    temp= mergesort(temp)

    let j=0
    for(let i=0;i<arr.length;i+=2){
        arr[i]=temp[j++]
    }

    return arr
}

let arr=[1,3,4,5,2,7,-1]

console.log(sortorder(arr))