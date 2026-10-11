// 242. Valid Anagram
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

function checkAnagram(s1,s2){
    let map = new Map();
    if(s1.length !== s2.length) return false;
    for(let char of s1){
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else{
            map.set(char,1);
        }
    }

    for(let char of s2){
        if(!map.has(char) || map.get(char) === 0){
            return false;
        }
        map.set(char, map.get(char)-1);
    }
    return true;
}

console.log(checkAnagram("silent","listen"));