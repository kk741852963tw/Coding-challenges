/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var array = new Set(nums);
  var sum1 = 0;
  var sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  array.forEach(function(value) {
    sum2 += value;
  });
  return sum2 * 2- sum1;
};