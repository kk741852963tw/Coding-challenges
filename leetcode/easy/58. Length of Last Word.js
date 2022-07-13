/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var array = s.split(' ');
  var temp = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      temp.push(array[i]);
    }
  }
  return temp[temp.length - 1].length;
};