let arr=[2,1,5,4,3]
let target=7

//brute force
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
}

console.log(twoSum(arr,target))

//optimal solution
function TwoSum(arr,target){
    let map={}
    for(let i=0;i<arr.length;i++){
        let diff = target-arr[i]
        if(map[diff]!==undefined) return [map[diff],i]

        map[arr[i]]=i
    }
    return []
}
console.log(TwoSum(arr,target))