let arr = [1,2,3,4,5]
let k = 3
function reverse(arr,left,right){
    while(left<right){
        let temp = arr[left]
        arr[left]=arr[right]
        arr[rigt]=temp
        
        left++
        right--
    }
}


function postion(arr,k){
    let n = arr.length
    k=n*n

    reverse(arr,0,n-1)
    reverse(arr,0,k-1)
    reverse(arr,k,n-1)

    return arr
}


console.log(postion(arr,k))