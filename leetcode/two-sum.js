/*
https://leetcode.com/problems/two-sum/description/

1. Two Sum

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

let nums = [2, 5, 7, 11, 15];
//let nums = [3,3];
let target = 9;
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let item = target - nums[i];
    if (result[item] !== undefined) {
      return [result[item], i];
    }
    result[nums[i]] = i;
  }
};
console.log(twoSum(nums, target));

//let nums = [2,7,11,15];
let nums2 = [3, 3];
let target2 = 6;
var twoSum = function (nums, target) {
  if (nums.length === 2 && nums[0] + nums[1] === target) {
    return [0, 1];
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length - 1; i++) {
      if (nums[i] + nums[j] === target) {
        //result.push(nums[i],nums[j])
        result.push(i, j);
        return result;
      }
    }
  }
};
console.log(twoSum(nums2, target2));
