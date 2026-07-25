let arr = [4, 5, 1, 2, 1, 4];

function nonrepeating(arr){

    let map ={}

    for(let val of arr){
        map[val]=(map[val]||0)+1
    }

    for(let num of arr){
        if(map[num]===1){
            return num
        }
    }
    return -1
}

console.log(nonrepeating(arr))