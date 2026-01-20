// function fun(){
//     console.log("fun1() called");
// }

// function fun2(){
//     console.log("Before fun1()");
//     fun();
//     console.log("After fun1()")
// }

// console.log("Before fun2");
// fun2();
// console.log("After fun2")


// Lets underStands the output of this code
// First line 11 will be execute than after line 11
// fun2 line 6 will be execute than fun() will be called
// line 2 will be execute than after line 8 will be execute
// line 13 will be execute !.


// function fun(n){
//     if(n === 0) return; // the base case
//     console.log("GFG")
//     fun(n-1);
// }
// fun(5); 


function fibo(n){
  if(n <= 3) return n-1;

  let fibseries = fibo(n-1) + fibo(n-2)
  console.log(fibseries)
  return fibseries;
}
console.log(fibo(3));

// fibo(10)

// function fun(n){
//   if(n === 0) return;
//   fun(Math.floor(n/2));
//   console.log(n%2);
// }

// fun(5); 

// function calculateNumber(n){
//   if(n === 0) return;
//   console.log(n)
//   calculateNumber(n-1);
// }
// calculateNumber(7);

// function calculateNumber(n){
//   if(n === 0) return;
//   calculateNumber(n-1);
//   console.log(n);
// }
// calculateNumber(6) 

// function factorial(n){
//     if(n === 0 || n===1) return 1;
//   return n* factorial(n-1);
// }
function sum(n){
    if(n === 1){
       return n
    } 
   let ans = n + sum(n-1);
   return ans;
}
console.log(sum(5))


