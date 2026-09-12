// Given an input string s, reverse the order of the words

// Input: "the sky is blue" ------>> output: "blue is sky the"
// Input: "hello world" ----->> output: "world hello"


// const reverseWords = function (s){
//     const splits = s.split(" ");
//     const stack = [];

//     for(let i of splits){
//         stack.push(i);
//     }

//     let finals = "";

//     while(stack.length){
//         const current = stack.pop()

//        if(current){
//           finals+= " " + current;
//        }  
//     }

//     return finals.trim();
// };

// console.log(reverseWords('the sky is blue'));


// ------------------------------------------

// function reverseString(str) {
//   const stack = [];

//   for (let char of str) {
//     stack.push(char); // pushing Element
//   }

//   let reversed = "";

//   while (stack.length) {
//     reversed += stack.pop();
//   }

//   return reversed;
// }

// console.log(reverseString("alok"));


// function reverseString(str){
//     let stack = [];

//     for(let char of str){
//         stack.push(char);
//     }

//     let reverse ="";

//     while(stack.length){
//         reverse += stack.pop();
//     }

//     return reverse;
// }

// console.log(reverseString("alok"));



function findMissingNumber(arr){
    let n = arr.length+1;
    let Total = (n*(n+1))/2;
    let missingNumber;
    let sum =0;
    for(let i=0; i<arr.length;i++){
         sum +=arr[i];
    }
    missingNumber = Total-sum;
    return missingNumber;
}
console.log(findMissingNumber([1,2,3,5]));