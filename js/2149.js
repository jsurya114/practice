// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]

let nums = [3,1,-2,-5,2,-4]


function orders(arr){
    let left =[]
    let right=[]
    let j=0
    let i=0

    let res =[]

    for(let val of arr){
        if(val>=0){
            left.push(val)
        }else{
            right.push(val)
        }
    }

    while(i<left.length&&j<right.length){
        res.push(left[i++])
        res.push(right[j++])
    }

    while(i<left.length){
        res.push(left[i++])
    }

    while(j<right.length){
        res.push(right[j++])
    }

    return res
}


console.log(orders(nums))