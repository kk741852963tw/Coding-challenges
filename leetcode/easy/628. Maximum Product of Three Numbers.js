/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let high = Math.max(nums[0], nums[1]);
  let low = Math.min(nums[0], nums[1]);
  let high2 = nums[0] * nums[1];
  let low2 = nums[0] * nums[1];
  let high3 = nums[0] * nums[1] * nums[2];
  for (let i = 2; i < nums.length; i++) {
    high3 = Math.max(high3, nums[i] * high2, nums[i] * low2);
    high2 = Math.max(high2, nums[i] * high, nums[i] * low);
    low2 = Math.min(low2, nums[i] * high, nums[i] * low);
    high = Math.max(high, nums[i]);
    low = Math.min(low, nums[i]);
  }
  return high3;
};

/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


// var largestProductOfThree = function(array) {
//   // TODO: everything
//   // array = array.sort((a, b) => { return b - a; });
//   // var countpositive = 0;
//   // var countnagetive = 0;
//   // var countzero = 0;
//   // var Max = array[array.length - 1];
//   // var count = 0;
//   // for (let i = 0; i < array.length; i++) {
//   //   if (array[i] > 0) {
//   //     countpositive++;
//   //   } else if (array[i] < 0) {
//   //     countnagetive++;
//   //   } else {
//   //     countzero++;
//   //   }
//   //   if (Math.abs(array[i]) > Max) {
//   //     count++;
//   //   }
//   // }
//   // if (countpositive > 0 && count > 1) {
//   //   return array[0] * array[1] * array[array.length - 1];
//   // }
//   // if (countpositive > 2) {
//   //   return array[array.length - 3] * array[array.length - 2] * array[array.length - 1];
//   // }
//   var resultarray = [];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//       for (var k = j + 1; k < array.length; k++) {
//         var temp = array[i] * array[j] * array[k];
//         resultarray.push(temp);
//       }
//     }
//   }
//   resultarray = resultarray.sort((a, b) => { return a - b; });
//   return resultarray[resultarray.length - 1];
// };

