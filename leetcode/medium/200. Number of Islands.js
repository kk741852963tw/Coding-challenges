/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // let count = 0;
  // var help = function(i, j) {
  //   if (grid[i][j] === '1') {
  //     grid[i][j] = '0';
  //     if (i - 1 >= 0) {
  //         help(i - 1, j);
  //     }
  //     if (i + 1 < grid.length) {
  //         help(i + 1, j);
  //     }
  //     if (j - 1 >= 0) {
  //         help(i, j - 1);
  //     }
  //     if (j + 1 < grid[0].length) {
  //         help(i, j + 1);
  //     }
  //   }
  // }
  // for (let i = 0; i < grid.length; i++) {
  //   for (let j = 0; j < grid[0].length; j++) {
  //     if (grid[i][j] === '1') {
  //       help(i, j);
  //       count++;
  //     }
  //   }
  // }
  // return count;
  let count = 0;
  var help = function(i, j) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
          return;
      }
      grid[i][j] = '0';
      help(i - 1, j);
      help(i + 1, j);
      help(i, j - 1);
      help(i, j + 1);
  }
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '1') {
              help(i, j);
              count++;
          }
      }
  }
  return count;
};

/**
 * Given a string representation of a 2d map, return the number of islands in the map.
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

//  function countIslands(mapStr) {
//   // Your code here.
//   if (mapStr === '.') {
//     return 0;
//   }
//   if (mapStr === '0') {
//     return 1;
//   }
//   var help = function(board, i, j, finali, finalj) {
//     if (board[i][j] === '.') {
//       return;
//     }
//     if (i === finali && j === finalj) {
//       result = true;
//     }
//     if (i + 1 <= board.length - 1 && !board.hasBeenVisited(i + 1, j)) {
//       board.togglePiece(i + 1, j);
//       help(board, i + 1, j, finali, finalj);
//       board.togglePiece(i + 1, j);
//     }
//     if (j + 1 <= board[i].length - 1 && !board.hasBeenVisited(i, j + 1)) {
//       board.togglePiece(i, j + 1);
//       help(board, i, j + 1, finali, finalj);
//       board.togglePiece(i, j + 1);
//     }
//     if (i - 1 >= 0 && !board.hasBeenVisited(i - 1, j)) {
//       board.togglePiece(i - 1, j);
//       help(board, i - 1, j, finali, finalj);
//       board.togglePiece(i - 1, j);
//     }
//     if (j - 1 >= 0 && !board.hasBeenVisited(i, j - 1)) {
//       board.togglePiece(i, j - 1);
//       help(board, i, j - 1, finali, finalj);
//       board.togglePiece(i, j - 1);
//     }
//   }
//   const array = mapStr.split('\n').map(element => {
//     return element.split('');
//   });
//   array.togglePiece = function(i, j) {
//     if (this[i][j] === '0') {
//       this[i][j] = '1';
//     } else if (this[i][j] === '1') {
//       this[i][j] = '0';
//     }
//   };
//   array.hasBeenVisited = function(i, j) {
//     if (this[i][j] === '0') {
//       return false;
//     } else {
//       return true;
//     }
//   };
//   let array0 = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j] === '0') {
//         array0.push([i, j]);
//       }
//     }
//   }
//   let count = 1;
//   let change = false;
//   while (!change) {
//     array.togglePiece(array0[0][0], array0[0][1]);
//     let array1 = [];
//     let length = 0;
//     for (let i = 1; i < array0.length; i++) {
//       var result = false;
//       help(array, array0[0][0], array0[0][1], array0[i][0], array0[i][1]);
//       if (!result) {
//         array1.push([array0[i][0], array0[i][1]]);
//       }
//     }
//     if (length < array1.length) {
//       count++;
//       array0 = array1;
//     } else {
//       change = true;
//     }
//   }
//   return count;
// }
