// Input: "aabccccd"
// output: "a2b1c4d1"

function compressthestring(s){
    let res = ""
    let count = 1;
    for(let i=0; i<s.length; i++){
        if(s[i] == s[i+1]){
            count++;
        }else{
            res += s[i] + count;
            count = 1;
        }
    }
    return res;
}

console.log(compressthestring("aabcccd"));
