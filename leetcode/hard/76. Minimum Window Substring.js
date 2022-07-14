/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  var obj = {};
  for (let i = 0; i < t.length; i++) {
      if (!obj[t[i]]) {
          obj[t[i]] = 1;
      } else {
          obj[t[i]]++;
      }
  }
  var count = t.length;
  var left = 0;
  var result = '';
  for (let i = 0; i < s.length; i++) {
      if (Object.keys(obj).includes(s[i])) {
          if (obj[s[i]] > 0) {
              count--
          }
          obj[s[i]]--;
      }
      while (count === 0) {
          if (result === '') {
              result = s.substring(left, i + 1);
          } else {
              if (result.length > i - left + 1) {
                  result = s.substring(left, i + 1);
              }
          }
          if (obj[s[left]] !== undefined) {
              obj[s[left]]++;
          }
          if (obj[s[left]] > 0) {
              count++;
          }
          left++;
      }
  }
  return result;
};