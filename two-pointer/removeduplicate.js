// Remove duplicates return the unique element

function removeDuplicates(arr){
  if(arr.length === 0){
    return 0;
  }
  j = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}
console.log(removeDuplicates([1,1,1,2,2,3,3,4]));