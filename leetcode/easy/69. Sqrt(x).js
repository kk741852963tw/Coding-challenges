/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  var min = 0;
  var number = 1;
  while (true) {
    if (number ** 2 <= x) {
      min = number;
      number++;
    } else {
      break;
    }
  }
  return min;
};