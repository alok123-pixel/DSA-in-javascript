// moving zeroes to the end of an array

function moveZero(arr){
    let i =0;
    for(let j=0; j<arr.length; j++){
        if(arr[j] !== 0){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
        }
    }
    return arr;
}

console.log(moveZero([0,1,3,0,12]));