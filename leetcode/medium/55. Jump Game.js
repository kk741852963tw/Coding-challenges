/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // if (nums.length === 1) {
  //     return true;
  // }
  // for (let i = 0; i < nums.length; i++) {
  //     let check = false;
  //     if (nums[i] === 0) {
  //         return false;
  //     }
  //     if (i + nums[i] >= nums.length - 1) {
  //         return true;
  //     }
  //     for (let j = 0; j < nums[i]; j++) {
  //         if (nums[i + j + 1] >= nums[i] - j - 1) {
  //             i += j;
  //             check = true;
  //             break;
  //         }
  //     }
  //     if (!check) {
  //         i += nums[i];
  //         i--;
  //     }
  // }
  // return false;
  let goal = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
      if (i + nums[i] >= goal) {
          goal = i;
      }
  }
  if (goal === 0) {
      return true;
  }
  return false;
};