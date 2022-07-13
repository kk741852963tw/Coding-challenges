/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
  for (let i = 0; i < strs.length; i++) {
      strs[i] = strs[i].length + "#" + strs[i];
  }
  return strs.join('');
};

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
var decode = function(s) {
  var result = [];
  var num = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '#') {
      num += s[i];
    } else {
      num = Number(num);
      result.push(s.substring(i + 1, i + 1 + num));
      i += num;
      num = '';
    }
  }
  return result;
};

/**
* Your functions will be called as such:
* decode(encode(strs));
*/