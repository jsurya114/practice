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
            right.push(val)
        }else{
            left.push(val)
        }
    }

    while(i<right.length&&j<left.length){
        res.push(right[i++])
        res.push(left[j++])
    }

    while(i<right.length){
        res.push(right[i++])
    }

    while(j<left.length){
        res.push(left[j++])
    }

    return arr
}


console.log(orders(arr))