// selection sort algorithm in this we find a minimum element in the array and put into the first than find a second minimum and put into the
// second position and so on untill the array is sorted.

function selection_sort(arr){
   let n= arr.length;
   for(let i = 0; i < n-1; i++){
    let min_index = i;
    for(let j = i+1; j < n; j++){
        if(arr[j] < arr[min_index]){
            min_index = j; 
        }
    }
      [arr[min_index],arr[i]] = [arr[i],arr[min_index]];
   }
   return arr;
}

console.log(selection_sort([78,34,89,45,66,77,12,21,90,54,34,89,99,110,100,900,187,765,445,213,456,654]))