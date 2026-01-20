function sumofDigit(n){
    if(n <= 9) return n

    let lastdigit = n % 10;
    n = Math.floor(n/10)

    return sumofDigit(n)+lastdigit;
}

console.log(sumofDigit(567)); 