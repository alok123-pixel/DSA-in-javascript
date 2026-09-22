// Remove duplicates return the unique element

// function removeDuplicates(arr){
//   if(arr.length === 0){
//     return 0;
//   }
//   j = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] != arr[i+1]){
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   return j;
// }
// console.log(removeDuplicates([1,1,1,2,2,3,3,4]));
// If someone says that show me array after removing the duplicate
function removeDuplicate(arr){
    let i = 0;
    for(let j =1; j<arr.length; j++){
        if(arr[j] !== arr[i]){
            i = i+1;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0,i+1);
}
console.log(removeDuplicate([1,1,1,2,2,3,3,4]));
