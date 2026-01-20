function fibo(n){
  if(n <= 3) return n-1;

  let fibseries = fibo(n-1) + fibo(n-2)
  console.log(fibseries)
  return fibseries;
}
console.log(fibo(3));