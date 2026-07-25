let arr=[1,7,3,6,5,6]


function equilibrium(arr){
    let total =0
    for(let val of arr){
        total+=val
    }

    let leftSum=0
    for(let i=0;i<arr.length;i++){
        let rightSum= total-leftSum-arr[i]

        if(leftSum===rightSum) return i

        leftSum+=arr[i]
    }
    return -1

}

console.log(equilibrium(arr))