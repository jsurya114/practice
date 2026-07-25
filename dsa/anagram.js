let str1 ="silent"
let str2="world"

function anagram(str1,str2){
    if(str1.length!==str2.length) return false

    let freq={}
    for(let char of str1){
        freq[char]=(freq[char]||0)+1
    }
    for(let char of str2){
        if(!freq[char]) return false

        freq[char]--
    }
    return true

}

console.log(anagram(str1,str2))