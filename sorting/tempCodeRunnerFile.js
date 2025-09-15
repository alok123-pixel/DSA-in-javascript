function bubblesort(arr){
    let n = arr.length;;
    for(let i = 0; i < n-1; i++){
        let swap = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swap = true;
            }
        } if(swap === false){
            break;
        }
    }
    return arr;
}

console.log(bubblesort([12,99,34,11,99,56,1,2,4,8,10,67,15,45,93,45,67,98]));