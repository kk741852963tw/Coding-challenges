/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  var max = 0;
  var index = 0;
  var l = 0;
  var obj = {};
  for (let i = 0; i < s.length; i++) {
      if (!obj[s[i]]) {
          obj[s[i]] = 1;
      } else {
          obj[s[i]]++;
      }
      if (max < obj[s[i]]) {
          max = obj[s[i]];
      }
      if (i - index + 1 - max > k) {
          obj[s[index]]--;
          index++;
      } else {
          if (i - index + 1 > l) {
              l = i - index + 1;
          }
      }
  }
  return l;
};