// in this question we are trying to find the elment present in array or not if the element is present then return its index.

   // Iterative approach of binary search 
function binarySearch(arr,x){
    let low = 0;
    let high = arr.length-1;
    
    while(low<= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === x){
            return mid;
        }else if(arr[mid] > x){
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}

console.log(binarySearch([12,23,45,67,89,99,110,120,130,890,999,1000,1234,5678,9876,9999,100000],999))