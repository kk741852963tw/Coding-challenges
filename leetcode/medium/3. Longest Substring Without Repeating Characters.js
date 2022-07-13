/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var temp = '';
  var max = 0;
  for (var i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      if (i === s.length - 1) {
        temp += s[i];
          if (temp.length > max) {
            max = temp.length;
        }
      } else {
        temp += s[i];
      }
    } else {
      if (temp.length > max) {
        max = temp.length;
        var index = temp.indexOf(s[i]);
        temp = temp.substring(index + 1);
        temp += s[i];
      } else {
        var index = temp.indexOf(s[i]);
        temp = temp.substring(index + 1);
        temp += s[i];
      }
    }
  }
  return max;
};