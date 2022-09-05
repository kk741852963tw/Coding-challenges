/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  var help = function(i, j) {
      if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 'X' || board[i][j] === 'T') {
          return;
      }
      board[i][j] = 'T';
      help(i - 1, j);
      help(i + 1, j);
      help(i, j - 1);
      help(i, j + 1);
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (!(i === 0 || i === board.length - 1 || j === 0 || j === board[i].length - 1)) {
              continue;
          }
          if (board[i][j] === 'O') {
              help(i, j);
          }
      }
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'O') {
              board[i][j] = 'X';
          }
      }
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'T') {
              board[i][j] = 'O';
          }
      }
  }
};