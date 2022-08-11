/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var result = [];
  candidates.sort((a, b) => { return a - b });
  var array = [];
  var test = function(n, target) {
      if (target === 0) {
          result.push(array.slice());
      }
      for (let i = n; i < candidates.length; i++) {
          if (target - candidates[i] >= 0) {
              array.push(candidates[i]);
              test(i, target - candidates[i]);
              array.pop(candidates[i]);
          }
      }
  }
  test(0, target);
  return result;
};