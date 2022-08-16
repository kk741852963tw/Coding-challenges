/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  // const result = [];
  // for (let i = 0; i <= nums.length - k; i++) {
  //     let Max = -Infinity;
  //     for (let j = 1; j <= k; j++) {
  //         if (Max < nums[i + j - 1]) {
  //             Max = nums[i + j - 1];
  //         }
  //     }
  //     result.push(Max);
  // }
  // return result;
  const left = new Array(nums.length);
  const right = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
      if (i % k === 0) {
          left[i] = nums[i];
      } else {
          left[i] = Math.max(left[i - 1], nums[i]);
      }
      let j = nums.length - i - 1;
      if ((j + 1) % k === 0) {
          right[j] = nums[j];
      } else {
          right[j] = Math.max(right[j + 1], nums[j]);
      }
  }
  const output = new Array(nums.length - k + 1);
  for (let i = 0; i < output.length; i++) {
      output[i] = Math.max(left[i + k - 1], right[i]);
  }
  return output;
};