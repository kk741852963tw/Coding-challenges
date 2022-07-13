/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var index = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      index++;
      nums[index] = nums[i];
    }
  }
  return index + 1;
};