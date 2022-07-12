/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length  / 2; i++) {
    for (let j = 0; j < matrix.length - (2 * i) - 1; j++) {
      var temp = matrix[i][j + i];
      matrix[i][j + i] = matrix[matrix.length - 1 - j - i][i];
      matrix[matrix.length - 1 - j - i][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j - i];
      matrix[matrix.length - 1 - i][matrix.length - 1 - j - i] = matrix[j + i][matrix.length - 1 - i];
      matrix[j + i][matrix.length - 1 - i] = temp;
    }
  }
};

// /**
//  * Write a function that rotates a NxN matrix 90 degrees.
//  *
//  * A matrix, also called a 2-D array, is simply an array of arrays of values.
//  *
//  * Example 1x1 matrix:
//  *   [ [1] ]
//  *
//  * Example 2x2 matrix:
//  *  [ [1,2],
//  *    [3,4] ]
//  *
//  * Important note:
//  *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
//  *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
//  *   will be i places down, and j places over. This usually matches the way arrays are
//  *   addressed in code, but keep in mind that it differs from use in geometry and computer
//  *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
//  *
//  * Example rotation of a 4x4 matrix:
//  *
//  * var matrix = [
//  *  [1,2,3,4],
//  *  [5,6,7,8],
//  *  [9,'A','B','C'],
//  *  ['D','E','F','G']
//  * ];
//  * matrix[0][0]; // 1
//  * matrix[3][2]; // 'F'
//  *
//  * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
//  * // rotatedMatrix is:
//  * [ ['D',9,5,1],
//  *  ['E','A',6,2],
//  *  ['F','B',7,3],
//  *  ['G','C',8,4]
//  * ]
//  * rotatedMatrix[0][0]; // 'D'
//  * rotatedMatrix[3][2]; // 8
//  *
//  * Extra credit:
//  *  - Make your function operate on rectangular matrices (MxN rather than NxN).
//  *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
//  */

//  var rotateMatrix = function(matrix, direction = 1) {
//   // Your code here.
//   if (matrix.length === 0) {
//     return matrix;
//   }
//   let result = [];
//   if (direction === -1) {
//     for (let j = matrix[0].length - 1; j >= 0; j--) {
//       let temp = [];
//       for (let i = 0; i < matrix.length; i++) {
//         temp.push(matrix[i][j]);
//       }
//       result.push(temp);
//     }
//     return result;
//   } else {
//     for (let j = 0; j < matrix[0].length; j++) {
//       let temp = [];
//       for (let i = matrix.length - 1; i >= 0; i--) {
//         temp.push(matrix[i][j]);
//       }
//       result.push(temp);
//     }
//     return result;
//   }
// };
