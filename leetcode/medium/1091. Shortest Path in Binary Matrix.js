/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  // let result = -1;
  // const help = function(count, i, j) {
  //     if (i === grid.length - 1 && j === grid[0].length - 1 && grid[i][j] !== 1) {
  //         count++;
  //         if (result === -1) {
  //             result = Infinity;
  //         }
  //         result = Math.min(result, count);
  //         return;
  //     }
  //     if (i >= grid.length || i < 0 || j >= grid[0].length || j < 0 || grid[i][j] === 1 || (result !== -1 && count + 1 >= result)) {
  //         return;
  //     }
  //     grid[i][j] = 1;
  //     help(count + 1, i + 1, j + 1);
  //     help(count + 1, i + 1, j);
  //     help(count + 1, i, j + 1);
  //     help(count + 1, i, j - 1);
  //     help(count + 1, i - 1, j);
  //     help(count + 1, i - 1, j - 1);
  //     help(count + 1, i + 1, j - 1);
  //     help(count + 1, i - 1, j + 1);
  //     grid[i][j] = 0;
  // };
  // help(0, 0, 0);
  // return result;
  if (grid[0][0] === 1) return -1;
  const dirs = [[1, 1], [1, 0], [1, -1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [0, 1]];
  const N = grid.length;
  const isValid = function(x,y) {
      return x >= 0 && x < N && y >= 0 && y < N;
  };
  grid[0][0] = 1;
  const queue = [[0, 0, 1]];
  while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (x === N - 1 && y === N - 1) return dist;
      for (let i = 0; i < dirs.length; i++) {
          const nx = x + dirs[i][0];
          const ny = y + dirs[i][1];
          if (isValid(nx, ny) && grid[nx][ny] === 0) {
              queue.push([nx, ny, dist + 1]);
              grid[nx][ny] = 1;
          }
      }
  }
  return -1;
};