/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) {
    return [];
  }
  var result = [];
  nums = nums.sort((a, b) => { return a - b });
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var j = i + 1;
    var k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1] && j < k) {
          j++;
        }
        while (nums[k] === nums[k - 1] && j < k) {
          k--;
        }
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return result;
};