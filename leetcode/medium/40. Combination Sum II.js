/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var result = [];
  candidates.sort((a, b) => a - b);
  var array = [];
  var test = function(n, target) {
      if (target === 0) {
          result.push(array.slice());
      }
      for (let i = n; i < candidates.length; i++) {
          if (i !== n && candidates[i] === candidates[i - 1]) {
              continue;
          }
          if (target - candidates[i] >= 0) {
              array.push(candidates[i]);
              test(i + 1, target - candidates[i]);
              array.pop(candidates[i]);
          }
      }
  }
  test(0, target);
  return [... new Set(result)];
};