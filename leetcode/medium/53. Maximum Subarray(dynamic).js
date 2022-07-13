/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // var max = nums[0];
  // var temp = nums[0];
  // for (var i = 1; i < nums.length; i++) {
  //     temp += nums[i];
  //     if (temp < 0 || nums[i] > temp) {
  //         temp = nums[i];
  //     }
  //     if (max < temp) {
  //         max = temp;
  //     }
  // }
  // return max

  var prev = nums[0];
  var max = nums[0];

  for (var i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};

// /*
//  * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
//  * A single array item will count as a contiguous sum.
//  *
//  * example 1: sumArray([1, 2, 3]); // => 6
//  * example 2: sumArray([1, 2, 3, -4]); // 6
//  * example 3: sumArray([1, 2, 3, -4, 5]); // 7
//  * example 4: sumArray([4, -1, 5]); // => 8
//  * example 5: sumArray([10, -11, 11]); // 11
//  */

// // Solved in O(n) time with O(1) memory
// var sumArray = function(array) {
//   var max = array[0];
//   for (let i = 0; i < array.length; i++) {
//     var temp = array[i];
//     if (temp > max) {
//       max = temp;
//     }
//     for (let j = i + 1; j < array.length; j++) {
//       temp += array[j];
//       if (temp > max) {
//         max = temp;
//       }
//     }
//   }
//   return max;
// };