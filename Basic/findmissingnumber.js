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