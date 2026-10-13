// 409. Longest Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1./

function longestplaindrome(s){
    let map = new Map();
    for(let char of s){
        if(map.has(char)){
            map.set(char, map.get(char)+1);
        }else{
            map.set(char,1);
        }
    }

    let length = 0;
    let hasodd = false;

    // using pairs of each char
    for(let count of map.values()){
        length += Math.floor(count/2)*2;
        if(count % 2 == 1){
            hasodd = true;
        }
    }
    if(hasodd){
        length++;
    }
    return length;
}