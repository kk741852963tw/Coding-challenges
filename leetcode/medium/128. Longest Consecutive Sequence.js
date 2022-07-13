/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var array = new Set(nums);
  let max = 0;
  for (let num of array) {
    if (array.has(num - 1)) {
      continue;
    }
    let curr = num;
    let currmax = 1;
    while(array.has(curr + 1)) {
      curr++;
      currmax++;
    }
    max = Math.max(max, currmax);
  }
  return max;
};