// In this we have to find the given nuber is palindrome or not

function findPalindrome(n){
    let reverse = 0;
    let temp = n;
    while( temp !== 0){
        let ld = temp%10;
        reverse = reverse * 10 + ld;
        temp = Math.floor(temp/10);
    }
    return (reverse === n);
}

console.log(findPalindrome(4454))