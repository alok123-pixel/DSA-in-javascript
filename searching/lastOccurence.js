// In this we have to find the last occurence of the element in the sorted array and have to return the index of that element
// if the element is not present in the array then we have to return -1
// input:[10,20,20,20,20,30,30,40,50], x = 20
// output: 4

function lastOccurence(arr,x){
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === x){
            if(mid === arr.length-1 || arr[mid+1] !== x){
                return mid;
            }else{
                low = mid+1;
            }
        }else if(arr[mid] < x){
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return -1;
}

console.log(lastOccurence([10,20,20,20,20,30,30,40,40,50],30));
