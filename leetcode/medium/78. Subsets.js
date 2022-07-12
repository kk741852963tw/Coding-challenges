/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var result = [];
  var test = function(input, n) {
    result.push(input);
    if (n >= nums.length) {
      return;
    }
    for (let i = n; i < nums.length; i++) {
      test(input.concat(nums[i]), i + 1);
    }
  };
  test([], 0);
  return result;
};

// /*
//  * Return an array with the power set of a given string.
//  * Definition of power set: The set of all possible subsets including the empty set.
//  *
//  * Example:
//  *
//  * powerSet("abc")
//  * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
//  *
//  * Note:
//  *  1. All characters in a subset should be sorted.
//  *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
//  *
//  * Example 2 :
//  *
//  * powerSet("jump")
//  * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
//  */

// var powerSet = function(str) {
//   str = str.split('');
//   str = [...new Set(str)];
//   str = str.join('');

//   var result = [];

//   var test = function(input, n) {
//     if (input.length === str.length + 1) {
//       return;
//     } else {
//       var temp2 = input.split('').sort().join('');
//       result.push(temp2);
//     }
//     for (var i = n; i < str.length; i++) {
//       var temp = input + str[i];
//       test(temp, i + 1);
//     }
//   }

//   test('', 0);

//   return result;
// };
