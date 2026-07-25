const input = ["eat", "tea", "tan", "ate", "nat", "bat"];


function group(arr){

    let map ={}
    for(let val of arr){
        let word = val.split("").sort().join("")

        if(map[word]===undefined) {
             map[word]=[]
        }

         map[word].push(val)
    }
    return Object.values(map)
}

console.log(group(input))