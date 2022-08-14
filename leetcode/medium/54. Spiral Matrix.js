/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let startrow = 0;
  let endrow = matrix.length - 1;
  let startcol = 0;
  let endcol = matrix[0].length - 1;
  const result = [];
  while (result.length < matrix.length * matrix[0].length) {
      for (let i = startcol; i <= endcol; i++) {
          result.push(matrix[startrow][i]);
      }
      for (let i = startrow + 1; i <= endrow; i++) {
          result.push(matrix[i][endcol]);
      }
      for (let i = endcol - 1; i >= startcol; i--) {
          if (startrow === endrow) break;
          result.push(matrix[endrow][i]);
      }
      for (let i = endrow - 1; i >= startrow + 1; i--) {
          if (endcol === startcol) break;
          result.push(matrix[i][startcol]);
      }
      startrow++;
      startcol++;
      endrow--;
      endcol--;
  }
  return result;
};