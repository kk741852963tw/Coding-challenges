/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var stemp = s.split('').sort().join('');
  var ttemp = t.split('').sort().join('');
  if (stemp === ttemp) {
    return true;
  }
  return false;
};