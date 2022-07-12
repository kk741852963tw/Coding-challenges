/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var swap = true;
  for (var j = 0; j < nums.length && swap; j++) {
    swap = false;
    for (var i = 0; i < nums.length - 1 - j; i++) {
      if (nums[i] > nums[i + 1]) {
        swap = true;
        var temp = nums[i + 1];
        nums[i + 1] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums;
};