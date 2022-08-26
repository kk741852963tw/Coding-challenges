/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const help = function(array) {
      if (array.length === nums.length) {
          result.push(array);
          return;
      }
      for (let i = 0; i < nums.length; i++) {
          if (array.includes(nums[i])) {
              continue;
          } else {
              const temp = array.slice();
              temp.push(nums[i]);
              help(temp);
          }
      }
  }
  help([]);
  return result;
};