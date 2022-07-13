/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  var result = [1];
  var temp = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    temp *= nums[i];
    result.push(temp);
  }
  temp = 1;
  for (let i = result.length - 2; i >= 0; i--) {
    temp *= nums[i + 1];
    result[i] *= temp;
  }
  return result;
};