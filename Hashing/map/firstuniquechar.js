// 387. First Unique Character in a String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

function findfirstunique(s){
    let map = new Map();
    for(let char of s){
        if(map.has(char)){
            map.set(char,map.get(char)+1);
        }else{
            map.set(char,1)
        }
    }

    // Finding the first occurence
    for(let  i=0; i<s.length; i++){
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
}

console.log(findfirstunique( "aabb"));