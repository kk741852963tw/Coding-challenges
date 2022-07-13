/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var array = [1, 2];
  for (var i = 1; i < 44; i++) {
    array.push(array[i - 1] + array[i]);
  }
  return array[n - 1];
};