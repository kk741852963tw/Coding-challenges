/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;
  if (nums[low] < nums[high] || nums.length === 1) {
      return nums[low];
  }
  let min = Infinity;
  while (low < high) {
      const middle = Math.floor((low + high) / 2);
      if (nums[low] <= nums[middle]) {
          low = middle + 1;
          min = Math.min(min, nums[low]);
      }
      else {
          high = middle;
      }
  }
  return min;
};