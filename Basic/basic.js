// In the given array we have to find the largest element and return the  element

function findLarg(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findLarg([10,28,39,44,56,56,67,89,10,13,15,67,89,100,897,678]))