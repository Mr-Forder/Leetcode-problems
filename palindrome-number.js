//Given an integer x, return true if x is a palindrome, and false otherwise.

//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.

const isPalindrome = function (number) {
  //FIRST, WE NEED TO TAKE OUR INPUT NUMBER AND REVERSE IT:
  const reversed = number
    .toString() //convert number to string
    .split("") //turn string into array, splitting at each char
    .reverse() //reverse order of array
    .join(""); //convert array back to string, joining at each char (important)
  const original = number.toString();
  console.log(original);
  console.log(reversed);
  //THEN, WE COMPARE OUR REVERSED NUMBER TO THE ORIGINAL
  return original === reversed; //return true if both strings are the same, i.e palendromic
};

console.log(isPalindrome(121)); //TRUE
