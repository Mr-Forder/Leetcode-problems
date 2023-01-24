//Given an array of integers, nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.

const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    //loop thru array -  i = index. for each number, execute:
    for (let k = 0; k < i; k++) {
      //another loop! k = index.
      if (nums[i] + nums[k] === target) {
        //then check if the current number in either of these two loops is equal to the target number
        return [k, i]; //if so, return the index of the number
      } else {
        return `No two numbers in this array will add up to the target number of ${target}`;
      }
    }
  }
};

console.log(twoSum(nums, 17));
