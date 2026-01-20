// In this we have to check whether a string is palindrome or not palindrome
// means the string which reads same from front and back

function ispal(s){
    let begin = 0;
    let end = s.length-1;
    while(begin < end){
        if(s[begin] != s[end]){
            return false;
        }
        begin++;
        end--;
    }
    return true;
}
console.log(ispal("malayalam"));

function Ispalindrome(str){
    let i = 0;
    let j = str.length-1;
    while(i < j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(Ispalindrome("malayalamm"))