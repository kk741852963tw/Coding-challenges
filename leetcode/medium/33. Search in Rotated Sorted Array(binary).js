/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) return middle;
    if (nums[low] <= nums[middle]) {
      if (target >= nums[low] && target < nums[middle]) {
        high = middle;
      }
      else {
        low = middle + 1;
      }
    }
    else {
      if (target > nums[middle] && target <= nums[high]) {
        low = middle + 1;
      }
      else {
        high = middle;
      }
    }
  }
  return nums[low] === target ? low : -1;
};