/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  // var left = 0;
  // var right = nums.length;
  // while (left < right) {
  //     var mid = Math.floor((left + right) / 2);
  //     if (nums[mid] < target) {
  //       left = mid + 1;
  //     } else if (nums[mid] > target) {
  //       right = mid;
  //     } else {
  //       return mid;
  //     }
  // }
  // return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[left] <= nums[right]) {
          if (target >= nums[left] && target < nums[mid]) {
              right = mid;
          } else {
              left = mid + 1;
          }
      } else {
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }
  }
  return nums[left] === target ? left : -1;
};