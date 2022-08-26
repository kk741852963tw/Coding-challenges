/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => { return a - b });
  const result = [];
  const help = function(array, input) {
      if (array.length === nums.length) {
          result.push(array);
          return;
      }
      for (let i = 0; i < input.length; i++) {
          if (input[i] === input[i - 1]) {
              continue;
          }
          const temp = array.slice();
          temp.push(input[i]);
          let temp2 = input.slice();
          temp2.splice(i, 1);
          help(temp, temp2);
      }
  }
  help([], nums);
  return result;
};