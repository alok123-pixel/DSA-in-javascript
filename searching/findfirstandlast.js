// 34. Find First and Last Position of Element in Sorted Array
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


function searchRange(nums, x) {
     function findfirst(){
        let low = 0;
        let high = nums.length-1;
        while(low <= high){
            let mid = Math.floor((low+high)/2);
            if(nums[mid] === x){
                if(mid == 0 || nums[mid-1] !== x){
                    return mid;
                }else{
                    high = mid-1;
                }
            }else if(nums[mid] < x){
                 low = mid+1;
            }else{
                high = mid-1
            }
        }
        return -1;
     }

     function findlast(){
        let low = 0;
        let high = nums.length-1;
        while(low<=high){
            let mid = Math.floor((low+high)/2);
            if(nums[mid] === x){
                if(mid === nums.length-1 || nums[mid+1] !== x){
                    return mid;
                }else{
                    low = mid+1;
                }
            }else if(nums[mid] < x){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
        return -1;
     }

     return [findfirst(),findlast()]
}

console.log(searchRange([5,7,7,8,8,10],8));
