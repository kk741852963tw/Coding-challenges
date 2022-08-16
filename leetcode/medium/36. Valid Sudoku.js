/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // var test = function(array) {
  //     var temp = [];
  //     for (let i = 0; i < array.length; i++) {
  //         if (array[i] === ".") {
  //             continue;
  //         }
  //         if (temp.indexOf(array[i]) === -1) {
  //             temp.push(array[i]);
  //         } else {
  //             return false;
  //         }
  //     }
  //     return true;
  // };
  // var box = new Array(board.length).fill();
  // for (let i = 0; i < board.length; i++) {
  //     if (!test(board[i])) {
  //         return false;
  //     }
  //     var temp = [];
  //     for (let j = 0; j < board[i].length; j++) {
  //         var index = 3 * parseInt(i / 3) + parseInt(j / 3);
  //         if (box[index] === undefined) {
  //             box[index] = [];
  //         }
  //         box[index].push(board[i][j]);
  //         if (board[j][i] === ".") {
  //             continue;
  //         }
  //         if (temp.indexOf(board[j][i]) === -1) {
  //             temp.push(board[j][i]);
  //         } else {
  //             return false;
  //         }
  //     }
  // }
  // for (let i = 0; i < board.length; i++) {
  //     if (!test(box[i])) {
  //         return false;
  //     }
  // }
  // return true;
  const rows = {};
  const cols = {};
  const squares = {};

  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          const num = board[r][c];

          if (num === '.') {
              continue;
          }

          const grid = 3 * parseInt(r / 3) + parseInt(c / 3);

          if (!cols[c]) {
              cols[c] = new Set();
          }
          if (!rows[r]) {
              rows[r] = new Set();
          }
          if (!squares[grid]) {
              squares[grid] = new Set();
          }

          if (
              rows[r].has(num) ||
              cols[c].has(num) ||
              squares[grid].has(num)
          ) {
              return false;
          }

          cols[c].add(num);
          rows[r].add(num);
          squares[grid].add(num);
      }
  }

  return true;
};

// /*
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// Input: A String representing the board.
// Output: 'solved' if the board is valid, 'invalid' if it isn't

// Example input:
// "735814296\n
// 896275314\n
// 214963857\n
// 589427163\n
// 362189745\n
// 471356982\n
// 923541678\n
// 648792531\n
// 157638429"
// */



// function sudokuChecker(board) {
//   // Your code here.
//   var array = board.split('\n');
//   for (let i = 0; i < array.length; i++) {
//     let temp = array[i].split('').sort().join('');
//     if (temp !== '123456789') {
//       return 'invalid';
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     let temp = [];
//     for (let j = 0; j < array.length; j++) {
//       temp.push(array[j][i]);
//     }
//     temp = temp.sort().join('');
//     if (temp !== '123456789') {
//       return 'invalid';
//     }
//   }
//   for (let k = 0; k < array.length / 3; k++) {
//     for (let m = 0; m < array.length / 3; m++) {
//       let temp = [];
//       for (let i = k * 3; i < k * 3 + 3; i++) {
//         for (let j = m * 3; j < m * 3 + 3; j++) {
//           temp.push(array[i][j]);
//         }
//       }
//       temp = temp.sort().join('');
//       if (temp !== '123456789') {
//         return 'invalid';
//       }
//     }
//   }
//   return 'solved';
// }
