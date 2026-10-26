// 179. Largest Number
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

 

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"


function largestNumber(nums){
    let n = nums.length;
    for(let i =0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            let ab = String(nums[j]) + String(nums[j+1]);
            let ba = String(nums[j+1]) + String(nums[j]);

            if(ab < ba){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]];
            }
        }
    }
    if(nums[0] === 0) return "0"
    return nums.join('');
}

console.log(largestNumber([10,2]));
