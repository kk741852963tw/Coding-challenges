/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const obj = {};
  const stack = [];
  stack.push(nums2[0]);
  for (let i = 1; i < nums2.length; i++) {
      if (nums2[i] <= stack[stack.length - 1]) {
          stack.push(nums2[i]);
      } else {
          while (nums2[i] > stack[stack.length - 1]) {
              obj[stack[stack.length - 1]] = nums2[i];
              stack.pop();
          }
          stack.push(nums2[i]);
      }
  }
  for (let i = 0; i < stack.length; i++) {
      obj[stack[i]] = -1;
  }
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
      result.push(obj[nums1[i]]);
  }
  return result;
};