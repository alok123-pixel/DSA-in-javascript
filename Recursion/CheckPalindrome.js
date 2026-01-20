// Check the given string is palindrome or not using recursion

// function checkPalindrome(str,start, end){
//    if(start >= end) return true;

//    return ((str[start] === str[end]) && checkPalindrome(str,str+1,end-1));
// }

// console.log(checkPalindrome('aba'));

function facto(n){
   if(n === 0){
      return 1;
   }else{
      return n*facto(n-1);
   }
}
console.log(facto(5));