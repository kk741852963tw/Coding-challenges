/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  var result = [[1]];
  while (numRows > 1) {
    var temp = [];
    temp.push(result[result.length - 1][0]);
    for (let i = 0; i < result[result.length - 1].length - 1; i++) {
      var number = result[result.length - 1][i] + result[result.length - 1][i + 1];
      temp.push(number);
    }
    temp.push(1);
    result.push(temp);
    numRows--;
  }
  return result;
};