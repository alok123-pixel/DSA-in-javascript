// Finding a subsequence of given string and if present return true otherwise return false

function subsequnece(s1,s2){
    let j = 0;
    for(let i = 0; i < s1.length && j < s2.length; i++){
        if(s1[i] === s2[j]){
            j++;
        }
    }
    return (j === s2.length);
}
console.log(subsequnece("alok","ok"));