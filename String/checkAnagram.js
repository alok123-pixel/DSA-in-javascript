// In this we have to check whether two strings are anagram or not
function isAnagram(s1,s2){
    if(s1.length != s2.length){
        return false;
    }
    let s1s = s1.split('').sort().join('');
    let s2s = s2.split('').sort().join('');

    return (s1s === s2s);
}
console.log(isAnagram("anagram","nagaram"));