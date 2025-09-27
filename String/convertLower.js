// In this we have to convert the given string into lowercase

function lowerCase(s){
    for(let i = 0; i < s.length; i++){
        if(s[i] >= 'A' && s[i] <= 'Z'){
            s = s.substring(0,i) + String.fromCharCode(s[i].charCodeAt(0) + 32) + s.substring(i + 1);
        }
    }
    return s;
}

console.log(lowerCase("ALOK"));