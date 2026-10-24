// 881. Boats to Save People
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

function boatstosavepeople(people,limit){
    people.sort((a,b)=> a-b);
    let left = 0;
    let right = people.length-1;
    let boat_count = 0;

    while(left <= right){
        if(people[left] + people[right] === limit){
              left++
              right--;
              boat_count++;
        }else{
            right--;
            boat_count++;
        }
    }
    return boat_count;
}

console.log(boatstosavepeople([3,2,2,1],3));
