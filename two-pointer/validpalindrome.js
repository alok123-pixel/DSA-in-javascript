// 125. Valid Palindrome
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
    if(s == " ") return true;
    let string = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let i = 0, j = string.length-1;
    while(i <= j){
        if(string[i] === string[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
