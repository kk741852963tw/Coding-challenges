/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let result = nums[0];
  let curMax = 1;
  let curmin = 1;
  for (let i = 0; i < nums.length; i++) {
      const temp = nums[i] * curMax;
      curMax = Math.max(nums[i] * curMax, nums[i] * curmin, nums[i]);
      curmin = Math.min(temp, nums[i] * curmin, nums[i]);
      result = Math.max(result, curMax);
  }
  return result;
};