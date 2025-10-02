// In this we have to find the given nuber is palindrome or not

function isPalindrome(n){
    let temp = n;
    let reverse = 0;
    while(temp !== 0){
        let ld = temp % 10;
        reverse = reverse * 10 + ld;
        temp = Math.floor(temp/10);
    }
    return (reverse === n);
}

console.log(isPalindrome(78797));