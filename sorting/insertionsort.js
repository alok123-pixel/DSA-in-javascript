// in insertion sort we compare the current value with its previous value

function insertionsort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertionsort([121,99,10,45,67,78,23]));