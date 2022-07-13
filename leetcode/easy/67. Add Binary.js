/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var max = Math.max(a.length, b.length);
  if (a.length > b.length) {
    var diff = a.length - b.length;
    var string = '';
    for (var i = 0; i < diff; i++) {
      string += '0';
    }
    b = string + b;
  } else {
    var diff = b.length - a.length;
    var string = '';
    for (var i = 0; i < diff; i++) {
      string += '0';
    }
    a = string + a;
  }
  var temp = 0;
  var digits = [];
  for (var i = a.length - 1; i >= 0; i--) {
    if (temp === 0) {
      if (a[i] === '1' && b[i] === '1') {
        digits[i] = '0';
        if (i === 0) {
          digits.unshift('1');
          break;
        }
        temp = 1;
      } else {
        if (a[i] === '1' || b[i] === '1') {
          digits[i] = '1';
        } else {
          digits[i] = '0';
        }
      }
    } else {
      if (a[i] === '0' && b[i] === '0') {
        digits[i] = '1';
        temp = 0;
      } else if ((a[i] === '1' || b[i] === '1') && !(a[i] === '1' && b[i] === '1')) {
        digits[i] = '0';
        if (i === 0) {
          digits.unshift('1');
          break;
        }
        temp = 1;
      } else {
        digits[i] = '1';
        if (i === 0) {
          digits.unshift('1');
          break;
        }
        temp = 1;
      }
    }
  }
  return digits.join('');
};