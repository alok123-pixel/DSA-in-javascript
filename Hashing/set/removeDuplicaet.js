function removeDuplicate(arr){
      let set = new Set();
      for(let i=0; i<arr.length; i++){
           if(set.has(arr[i])){
              set.delete(arr[i]);
           }else{
              set.add(arr[i]);
           }
      }
      return [...set];
}

console.log(removeDuplicate([1,2,2,3,4,18,18,89]))