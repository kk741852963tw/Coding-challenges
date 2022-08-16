/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // let obj = {};
  // for (let i = 0; i < numbers.length; i++) {
  //     obj[numbers[i]] = i;
  // }
  // for (let i = 0; i < numbers.length; i++) {
  //     let goal = target - numbers[i];
  //     if (goal in obj && i !== obj[goal]) {
  //         if (i > obj[goal]) {
  //             return [obj[goal] + 1, i + 1];
  //         }
  //         return [i + 1, obj[goal] + 1];
  //     }
  // }
  let right = numbers.length - 1;
  for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] + numbers[right] === target) {
          return [i + 1, right + 1];
      }
      if (numbers[i] + numbers[right] > target) {
          right--;
          i--;
      }
  }
};