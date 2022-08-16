/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  var obj = {};
  for (let i = 0; i < s1.length; i++) {
      if (!obj[s1[i]]) {
          obj[s1[i]] = 1;
      } else {
          obj[s1[i]]++;
      }
  }
  var count = s1.length;
  var left = 0;
  var result = '';
  for (let i = 0; i < s2.length; i++) {
      if (Object.keys(obj).includes(s2[i])) {
          if (obj[s2[i]] > 0) {
              count--
          }
          obj[s2[i]]--;
      }
      while (count === 0) {
          if (i - left + 1 === s1.length) {
              return true;
          }
          if (obj[s2[left]] !== undefined) {
              obj[s2[left]]++;
          }
          if (obj[s2[left]] > 0) {
              count++;
          }
          left++;
      }
  }
  return false;
};