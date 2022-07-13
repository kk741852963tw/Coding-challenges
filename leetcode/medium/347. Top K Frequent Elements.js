/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  var obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  var result = new Array(nums.length);
  for (let key in obj) {
    if (!result[obj[key] - 1]) {
      result[obj[key] - 1] = [];
      result[obj[key] - 1].push(Number(key));
    } else {
      result[obj[key] - 1].push(Number(key));
    }
  }
  var final = [];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i]) {
      final = final.concat(result[i]);
      k -= result[i].length;
      if (k === 0) {
        return final;
      }
    }
  }
};