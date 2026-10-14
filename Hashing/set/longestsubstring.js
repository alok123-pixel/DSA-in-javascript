//  Longest Substring Without Repeating Characters
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstring(s){
    let maxlength = 0;
    for(let i = 0; i<s.length; i++){
        let set = new Set();
        for(let j = i; j<s.length; j++){
            if(set.has(s[j])){
                break;
            }
            set.add(s[j]);
            maxlength = Math.max(maxlength, j-i+1)
        }
    }
    return maxlength;
}

console.log(longestSubstring("abcabcbb"));
