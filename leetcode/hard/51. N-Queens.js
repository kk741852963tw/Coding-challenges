/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  // const testRow = function(i) {
  //     let count = 0;
  //     for (let y = 0; y < board[i].length; y++) {
  //         if (board[i][y] === 'Q') {
  //             count++;
  //         }
  //     }
  //     if (count > 1) {
  //         return false;
  //     }
  //     return true;
  // };
  // const testCol = function(j) {
  //     let count = 0;
  //     for (let x = 0; x < board.length; x++) {
  //         if (board[x][j] === 'Q') {
  //             count++;
  //         }
  //     }
  //     if (count > 1) {
  //         return false;
  //     }
  //     return true;
  // };
  // const testDigR = function(i, j) {
  //     let count = 0;
  //     let x = i;
  //     let y = j;
  //     while (x < n && y < n && x >= 0 && y >= 0) {
  //         if (board[x][y] === 'Q') {
  //             count++
  //         }
  //         x++;
  //         y++;
  //     }
  //     while (i < n && j < n && i >= 0 && j >= 0) {
  //         if (board[i][j] === 'Q') {
  //             count++
  //         }
  //         i--;
  //         j--;
  //     }
  //     count--;
  //     if (count > 1) {
  //         return false;
  //     }
  //     return true;
  // };
  // const testDigL = function(i, j) {
  //     let count = 0;
  //     let x = i;
  //     let y = j;
  //     while (x < n && y < n && x >= 0 && y >= 0) {
  //         if (board[x][y] === 'Q') {
  //             count++
  //         }
  //         x++;
  //         y--;
  //     }
  //     while (i < n && j < n && i >= 0 && j >= 0) {
  //         if (board[i][j] === 'Q') {
  //             count++
  //         }
  //         i--;
  //         j++;
  //     }
  //     count--;
  //     if (count > 1) {
  //         return false;
  //     }
  //     return true;
  // };
  // let board = new Array(n).fill('.').map(e => new Array(n).fill('.'));
  // let result = [];
  // const help = function(i, j, count) {
  //     if (!testRow(i) || !testCol(j) || !testDigR(i, j) || !testDigL(i, j)) {
  //         return;
  //     }
  //     if (count === n) {
  //         const temp = board.slice().map(e => e.join(''));
  //         result.push(temp);
  //         return;
  //     }
  //     for (let y = 0; y < n; y++) {
  //         board[count][y] = 'Q';
  //         help(count, y, count + 1);
  //         board[count][y] = '.';
  //     }
  // };
  // help(0, 0, 0);
  // return result;
  let col = new Set();
  let posDiag = new Set(); // (r + c)
  let negDiag = new Set(); // (r - c)
  let board = new Array(n).fill().map(() => new Array(n).fill('.'));
  let res = [];
  function backtrack(r) {
      let temp = [];
      if (r === n) {
          for (let row of board) {
              temp.push(row.join(''));
          }
          res.push(temp);
          return;
      }
      for (let c = 0; c < n; c++) {
          if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
              continue;
          }
          col.add(c);
          posDiag.add(r + c);
          negDiag.add(r - c);
          board[r][c] = 'Q';
          backtrack(r + 1);
          col.delete(c);
          posDiag.delete(r + c);
          negDiag.delete(r - c);
          board[r][c] = '.';
      }
  }
  backtrack(0);
  return res;
};