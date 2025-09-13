//********************* */
// to sabse pahle ham find karnege ki element present hai ya nahi or agar element present
// hai to uski first occurance find karenge first occurance find karne ke liye ham 
// uski previous value se compare karenge agar previous value diff hai to we have successfully find 
// the first occurance of the element.



function firstOccurance(arr,x){
    let low = 0;
    let high = arr.length-1;
    while(low <= high){
        let mid =Math.floor((low + high)/2);
        if(arr[mid] === x){
            if(mid === 0 || arr[mid-1] !== x){
                return mid;
            }else{
                high = mid-1;
            }
        }
        else if(arr[mid] < x){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return -1;
}