/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let matrix = new Array(3).fill(0).map(element => new Array(3).fill(' '));
  for (let i = 0; i < moves.length; i++) {
      if (i % 2 === 0) {
          matrix[moves[i][0]][moves[i][1]] = 'X';
      } else {
          matrix[moves[i][0]][moves[i][1]] = 'O';
      }
  }
  const direction = [[1, 0, 2, 0], [0, 1, 0, 2], [1, 1, 2, 2], [1, -1, 2, -2]];
  let countX = 0;
  let countO = 0;
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === ' ') {
              continue;
          }
          const curr = matrix[row][col];
          for (let i = 0; i < direction.length; i++) {
              const row1 = row + direction[i][0];
              const col1 = col + direction[i][1];
              const row2 = row + direction[i][2];
              const col2 = col + direction[i][3];
              if (row2 >= 0 && row2 < matrix.length && col2 >= 0 && col2 < matrix[0].length && curr === matrix[row1][col1] && curr === matrix[row2][col2]) {
                  if (curr === 'X') {
                      countX++;
                  } else {
                      countO++;
                  }
              }
          }
      }
  }
  if (countX > countO) {
      return 'A';
  } else if (countX < countO) {
      return 'B';
  } else if (moves.length === 9) {
      return 'Draw';
  } else {
      return 'Pending'
  }
};