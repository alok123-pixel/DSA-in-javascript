// Isme hamko array ke har element ka square karke return karna hai

function sortedSquare(nums){
    let res = []
    let l = 0;
    let r = nums.length-1;

    while(l <= r){
        let [left,right] = [nums[l], nums[r]]
        if(Math.abs(right) > Math.abs(left)){
            res.unshift(right * right);
            r--;
        }else{
            res.unshift(left * left)
            l++;
        }
    }
    return res;
}
console.log(sortedSquare([1,-3,2,-4]));