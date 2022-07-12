/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  var result = [];
  var objTemp = {};
  for (let i = 0; i < s.length; i++) {
    if (!objTemp[s[i]]) {
      objTemp[s[i]] = 1;
    } else {
      objTemp[s[i]]++;
    }
  }
  for (let keys in objTemp) {
    result.push([keys, objTemp[keys]]);
  }
  result = result.sort((a, b) => {
    if (a[1] > b[1]) {return -1;}
    if (a[1] < b[1]) {return 1;}
    return 0;
  });
  var string = '';
  for (let i = 0; i < result.length; i++) {
    while (result[i][1] > 0) {
        string += result[i][0];
        result[i][1]--;
    }
  }
  return string;
};