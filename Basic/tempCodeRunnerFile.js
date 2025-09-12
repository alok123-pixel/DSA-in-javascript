function findLarg(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findLarg([1,2,3,4,5,6,7,8,10,13,15,67,89,100,897,678]))