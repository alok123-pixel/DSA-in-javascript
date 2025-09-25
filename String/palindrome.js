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