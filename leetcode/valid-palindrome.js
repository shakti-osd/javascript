/*
https://leetcode.com/problems/valid-palindrome/

125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

var isPalindrome = function (s) {
  let str = s.match(/[A-Za-z0-9]/g);
  if (str === null) {
    return true;
  }
  let res1 = str.join("").toLowerCase();
  let res2 = str.reverse().join("").toLowerCase();
  if (res1 === res2) return true;
  else return false;
};

// or

var isPalindrome = function (s) {
  let str = s.match(/[A-Za-z0-9]/g);
  if (str === null) {
    return true;
  }
  str = str.join("").toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
