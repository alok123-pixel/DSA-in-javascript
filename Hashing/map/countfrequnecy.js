function countfrequency(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1)
        }else{
            map.set(arr[i], 1);
        }
    }
    return map;
}

console.log(countfrequency([1,2,3,1,2,3,4,5,6,3,1,4,6,5]))