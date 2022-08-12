/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // if (nums.length === 1) {
  //     return nums[0];
  // }
  // if (nums.length === 2) {
  //     return Math.max(nums[0], nums[1]);
  // }
  // let rob1 = nums[0];
  // let rob2 = Math.max(nums[0], nums[1]);
  // for (let i = 2; i < nums.length; i++) {
  //     const temp = Math.max(nums[i] + rob1, rob2);
  //     rob1 = rob2;
  //     rob2 = temp;
  // }
  // return rob2;
  let rob1 = 0;
  let rob2 = 0;
  for (let i = 0; i < nums.length; i++) {
      const temp = Math.max(nums[i] + rob1, rob2);
      rob1 = rob2;
      rob2 = temp;
  }
  return rob2;
};