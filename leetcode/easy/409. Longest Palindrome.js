/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  var obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  var count = 0;
  var odd = false;
  for (let key in obj) {
    if (obj[key] % 2 === 0) {
      count += obj[key];
    } else {
      odd = true;
      if (obj[key] - 1 > 0) {
        count += obj[key] - 1;
      }
    }
  }
  if (odd) {
    return count + 1;
  } else {
    return count;
  }
};