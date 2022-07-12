/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var board = new Array(m);
  for (let i = 0; i < m; i++) {
    board[i] = new Array(n);
  }
  for (let i = 0; i < n; i++) {
    board[0][i] = 1;
  }
  for (let i = 0; i < m; i++) {
    board[i][0] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      board[i][j] = board[i - 1][j] + board[i][j - 1];
    }
  }
  return board[m - 1][n - 1];
};

// /**
//  *
//  *  A robot located at the top left corner of a 5x5 grid is trying to reach the
//  *  bottom right corner. The robot can move either up, down, left, or right,
//  *  but cannot visit the same spot twice. How many possible unique paths are
//  *  there to the bottom right corner?
//  *
//  *  make your solution work for a grid of any size.
//  *
//  */

// // A Board class will be useful

// var makeBoard = function(n) {
//   var board = [];
//   for (var i = 0; i < n; i++) {
//     board.push([]);
//     for (var j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.togglePiece = function(i, j) {
//     this[i][j] = !this[i][j];
//   };
//   board.hasBeenVisited = function(i, j) {
//     return !!this[i][j];
//   };
//   return board;
// };

// var robotPaths = function(n, board, i, j) {
//   var result = 0;
//   var metrix = makeBoard(n);
//   metrix.togglePiece(0, 0);

//   var help = function(board, i, j) {
//     if (i === board.length - 1 && j === board[0].length - 1) {
//         result++;
//         return;
//       }
//     if (i + 1 <= board.length - 1 && !board.hasBeenVisited(i + 1, j)) {
//       board.togglePiece(i + 1, j);
//       help(board, i + 1, j);
//       board.togglePiece(i + 1, j);
//     }
//     if (j + 1 <= board[0].length - 1 && !board.hasBeenVisited(i, j + 1)) {
//       board.togglePiece(i, j + 1);
//       help(board, i, j + 1);
//       board.togglePiece(i, j + 1);
//     }
//     if (i - 1 >= 0 && !board.hasBeenVisited(i - 1, j)) {
//       board.togglePiece(i - 1, j);
//       help(board, i - 1, j);
//       board.togglePiece(i - 1, j);
//     }
//     if (j - 1 >= 0 && !board.hasBeenVisited(i, j - 1)) {
//       board.togglePiece(i, j - 1);
//       help(board, i, j - 1);
//       board.togglePiece(i, j - 1);
//     }
//   }

//   help(metrix, 0, 0);
//   return result;
// };

