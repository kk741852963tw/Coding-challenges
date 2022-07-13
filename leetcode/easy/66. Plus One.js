/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  } else {
    if (digits.length === 1) {
      return [1, 0];
    }
    digits[digits.length - 1] = 0;
    for (var i = digits.length - 2; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i] = digits[i] + 1;
        return digits;
      } else {
        digits[i] = 0;
        if (i === 0) {
          digits.unshift(1);
          return digits;
        }
      }
    }
  }
};