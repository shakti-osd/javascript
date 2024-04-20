/*
https://leetcode.com/problems/longest-common-prefix/

14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

var longestCommonPrefix = function (strs) {
  // Return early on empty input
  if (!strs.length) return "";

  // Loop through the letters of the first word
  for (let i = 0; i <= strs[0].length; i++) {
    // Check if this character is present in the same position of every string
    if (!strs.every((string) => string[i] === strs[0][i])) {
      // If not, return the string up to and including the previous character
      return strs[0].slice(0, i);
    }
  }

  return strs[0];
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
