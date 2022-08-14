/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // for (let i = 0; i < matrix.length  / 2; i++) {
  //     for (let j = 0; j < matrix.length - (2 * i) - 1; j++) {
  //         var temp = matrix[i][j + i];
  //         matrix[i][j + i] = matrix[matrix.length - 1 - j - i][i];
  //         matrix[matrix.length - 1 - j - i][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j - i];
  //         matrix[matrix.length - 1 - i][matrix.length - 1 - j - i] = matrix[j + i][matrix.length - 1 - i];
  //         matrix[j + i][matrix.length - 1 - i] = temp;
  //     }
  // }
  var transpose = function (matrix) {
      let n = matrix.length;
      for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
              let temp = matrix[j][i];
              matrix[j][i] = matrix[i][j];
              matrix[i][j] = temp;
          }
      }
  };
  var reflect = function (matrix) {
      let n = matrix.length;
      for (let i = 0; i < n; i++) {
          for (let j = 0; j < n / 2; j++) {
              let temp = matrix[i][j];
              matrix[i][j] = matrix[i][n - j - 1];
              matrix[i][n - j - 1] = temp;
          }
      }
  };
  transpose(matrix);
  reflect(matrix);
};