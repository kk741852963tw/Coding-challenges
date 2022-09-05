/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[i].length; j++) {
         grid[i][j] = [grid[i][j], Infinity, false];
     }
  }
  let max = 0;
  var help = function(i, j, level) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j][0] === 0 || grid[i][j][2]) {
          return;
      }
      if (grid[i][j][0] === 2) {
          if (level) {
             return;
          }
      }
      grid[i][j][1] = Math.min(grid[i][j][1], level);
      grid[i][j][2] = true;
      help(i - 1, j, level + 1);
      help(i + 1, j, level + 1);
      help(i, j - 1, level + 1);
      help(i, j + 1, level + 1);
      grid[i][j][2] = false;
  }
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j][0] === 2) {
              help(i, j, 0);
          }
      }
  }
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j][0] === 1 && grid[i][j][1] === Infinity) {
              return -1;
          }
          if (grid[i][j][0] === 1) {
              max = Math.max(max, grid[i][j][1]);
          }
      }
  }
  return max;
};