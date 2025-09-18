// quicksort algorithm

function quicksort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}
console.log(quicksort([5,7,3,6,1,4,9,8]));