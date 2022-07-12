/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var str = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      var left = i;
      var right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }
  return str;
};


// /**
// * Implement a function that finds the longest palindrome in a given string.
// * For example, in the string "My dad is a racecar athlete", the longest
// * palindrome is "a racecar a". Count whitespaces as valid characters. Other
// * palindromes in the above string include "dad", "ete", " dad " (including
// * whitespace on each side of dad).
// */

// var longestPalindrome = function (string) {
//   var help = function(input) {
//     var stringReverse = '';
//     for (let i = input.length - 1; i >= 0; i--) {
//       stringReverse += input[i];
//     }
//     if (stringReverse === input) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   var result = '';
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j <= string.length; j++) {
//       if (help(string.substring(i, j))) {
//         if (result.length < string.substring(i, j).length) {
//           result = string.substring(i, j);
//         }
//       }
//     }
//   }
//   return result;
// };

