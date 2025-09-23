// moving zeroes to the end of an array

function moveZeroes(arr){
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            let hold = arr[j];
            arr[j] = arr[i];
            arr[i] = hold;
            j++;
        }
    }
    return arr;
}
console.log(moveZeroes([1,3,4,0,7,0]));