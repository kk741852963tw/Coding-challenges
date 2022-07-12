/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var check = true;
  if (x < 0) {
    check = false;
    x = x * (-1);
  }
  var newx = Number(x.toString().split('').reverse().join(''));
  if (newx > 2 ** 31 - 1 || newx < (2 ** 31) * (-1)) {
    return 0;
  }
  if (check) {
    return newx;
  }
  return newx * (-1);
};