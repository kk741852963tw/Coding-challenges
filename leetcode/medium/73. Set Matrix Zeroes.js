/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === 0) {
              result.push([i, j]);
          }
      }
  }
  for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          matrix[result[i][0]][j] = 0;
      }
      for (let j = 0; j < matrix.length; j++) {
          matrix[j][result[i][1]] = 0;
      }
  }
};