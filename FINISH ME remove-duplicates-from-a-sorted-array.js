//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//The relative order of the elements should be kept the same.

//The key word here is SORTED. so you'll only need to compare one number to the one that comes after it.
console.log("running");

const nums = [1, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9];

const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
};

console.log(removeDuplicates(nums));
