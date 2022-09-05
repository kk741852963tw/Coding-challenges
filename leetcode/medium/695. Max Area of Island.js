/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  let count;
  var help = function(i, j) {
      if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
          return;
      }
      grid[i][j] = 0;
      count++;
      help(i - 1, j);
      help(i + 1, j);
      help(i, j - 1);
      help(i, j + 1);
  }
  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === 1) {
              count = 0;
              help(i, j);
              max = Math.max(max, count);
          }
      }
  }
  return max;
};