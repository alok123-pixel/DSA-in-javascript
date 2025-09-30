// Finding a factorial of Number

function factorail(n){
    let res = 1;
    for(let i =2; i <= n; i++){ // factorial of a number is = n*(n-1)*(n-2)...*1
        res = res*i;
    }
    return res;
}