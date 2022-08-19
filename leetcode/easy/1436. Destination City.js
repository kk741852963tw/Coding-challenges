/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const obj = {};
  for (let i = 0; i < paths.length; i++) {
      if (!obj[paths[i][0]]) {
          obj[paths[i][0]] = paths[i][1];
      }
  }
  let temp = paths[0][0];
  while (obj[temp]) {
      temp = obj[temp];
  }
  return temp;
};