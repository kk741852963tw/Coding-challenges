/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
  const obj = {};
  for (let i = 0; i < n; i++) {
      obj[i] = [];
  }
  for (let i = 0; i < edges.length; i++) {
      obj[edges[i][0]].push(edges[i][1]);
      obj[edges[i][1]].push(edges[i][0]);
  }
  const visit = new Set();
  var help = function(node, prev) {
      if (visit.has(node)) {
          return false;
      }
      visit.add(node);
      for (let i = 0; i < obj[node].length; i++) {
          if (obj[node][i] === prev) {
              continue;
          }
          if (!help(obj[node][i], node)) {
              return false;
          }
      }
      return true;
  };
  return help(0, -1) && n === visit.size;
};