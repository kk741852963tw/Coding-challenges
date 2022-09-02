/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  const help = function(array, num) {
      result.push(array);
      for (let i = 0; i < num.length; i++) {
          if (num[i] === num[i - 1]) {
              continue;
          }
          const temp = num.slice(i);
          temp.splice(0, 1);
          help(array.concat(num[i]), temp);
      }
  };
  help([], nums);
  return result;
};