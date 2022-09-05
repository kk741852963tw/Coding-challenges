/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
  // let visit = new Set();
  // var help = function(i, j, level) {
  //     if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[i].length || rooms[i][j] === -1 || visit.has([i, j].toString()) || rooms[i][j] < level || (rooms[i][j] === 0 && level)) {
  //         return;
  //     }
  //     rooms[i][j] = level;
  //     visit.add([i, j].toString());
  //     help(i - 1, j, level + 1);
  //     help(i + 1, j, level + 1);
  //     help(i, j - 1, level + 1);
  //     help(i, j + 1, level + 1);
  //     visit.delete([i, j].toString());
  // }
  // for (let i = 0; i < rooms.length; i++) {
  //     for (let j = 0; j < rooms[i].length; j++) {
  //         if (rooms[i][j] === 0) {
  //             help(i, j, 0);
  //         }
  //     }
  // }
  let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let stack = [];
  for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < rooms[i].length; j++) {
          if (rooms[i][j] === 0) {
              stack.push([i, j]);
          }
      }
  }
  let count = 1;
  while (stack.length) {
      let length = stack.length;
      while (length) {
          let room = stack.shift();
          for (let i = 0; i < direction.length; i++) {
              let x = direction[i][0] + room[0];
              let y = direction[i][1] + room[1];
              if (x >= 0 && x < rooms.length && y >= 0 && y < rooms[x].length && rooms[x][y] === 2147483647) {
                  rooms[x][y] = count;
                  stack.push([x, y]);
              }
          }
          length--;
      }
      count++;
  }
};