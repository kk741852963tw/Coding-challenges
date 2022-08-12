/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var rob = function(nums) {
      let rob1 = 0;
      let rob2 = 0;
      for (let i = 0; i < nums.length; i++) {
          const temp = Math.max(nums[i] + rob1, rob2);
          rob1 = rob2;
          rob2 = temp;
      }
      return rob2;
  };
  return Math.max(rob(nums.slice(0, nums.length - 1)), rob(nums.slice(1)), nums[0]);
};