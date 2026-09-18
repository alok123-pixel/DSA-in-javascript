// 205. Isomorphic Strings
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "f11", t = "b23"

// Output: false

// Explanation:

// The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

function checkIsomorphic(s,t){

    if(s.length !== t.length){
        return false;
    }
    let mapst = new Map();
    let mapts = new Map();

    for(let i=0; i<s.length; i++){
        let chars = s[i];
        let chart =t[i];

        // s->t mapping
        if(mapst.has(chars)){
            if(mapst.get(chars) !== chart){
                return false;
            }
        }

        // t->s mapping
        if(mapts.has(chart)){
            if(mapts.get(chart) !== chars){
                return false;
            }
        }

        mapst.set(chars,chart);
        mapts.set(chart,chars);
    }
    return true;
}
console.log(checkIsomorphic("add","egg"));
