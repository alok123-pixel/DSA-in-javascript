// CountVowel: In this we have to count the vowel of a given string like how many vowels are present 
// in the string

function countVowel(s){
    let i = 0
    for(let j = 0; j < s.length; j++){
        if(s[j] === "a"||s[j] === "e"||s[j] === "i"|| s[j] === "o"||s[j] === "u"){
            i++;
        }
    }
    return i;
}
console.log(countVowel("Alokee"))