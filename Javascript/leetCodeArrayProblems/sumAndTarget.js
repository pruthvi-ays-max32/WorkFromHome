/* 1. Two Sum
Easy

Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/


let twoSum = function(nums, target) {

    let arr = nums
    let targetvalue = target
    let size = arr.length
    for(let i=0; i<size; i++){
        for(let j=i+1; j<size; j++){
            if(arr[i]+arr[j]===targetvalue){
                return [i, j]
            }
            else{
                continue
            }
            
        }
    }

};

let arr = [1,3,5,2,6,8]
console.log(twoSum(arr, 10))