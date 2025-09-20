// Two pointer approach where we find a target value pair and return the index of the pair
function twosum(arr,x){
    let i = 0;
    let j = arr.length-1;
    while(i < j){
        let curr = arr[i] + arr[j];
        if(curr === x){
            return [i+1, j+1];
        }else if(curr >x){
            j--;
        }else{
            i++;
        }
    }
    return false;
}
console.log(twosum([12,34,32,12,56],98));