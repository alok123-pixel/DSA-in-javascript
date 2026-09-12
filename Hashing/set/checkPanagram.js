// A panagram is a sentence where every letter of english alphabet appears at least once.

function checkPanagram(sentence){
    let set = new Set();
    for(let i =0; i<sentence.length; i++){
        let ch = sentence[i];
        set.add(ch);
    }
    return set.size == 26;
}

console.log(checkPanagram('abcefghijklmnopqrstuvwxyz'));