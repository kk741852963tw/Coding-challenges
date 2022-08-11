/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
  let parent = [];
  for (let i = 0; i < n; i++) {
      parent.push(i);
  }
  let rank = new Array(n).fill(1);
  var find = function(node) {
      result = node;
      while (result !== parent[result]) {
          parent[result] = parent[parent[result]];
          result = parent[result];
      }
      return result;
  };
  var union = function(node1, node2) {
      const parent1 = find(node1);
      const parent2 = find(node2);
      if (parent1 === parent2) {
          return 0;
      }
      if (rank[parent2] > rank[parent1]) {
          parent[parent1] = parent2;
          rank[parent2] += rank[parent1];
      } else {
          parent[parent2] = parent1;
          rank[parent1] += rank[parent2];
      }
      return 1;
  };
  let result = n;
  for (let i = 0; i < edges.length; i++) {
      result -= union(edges[i][0], edges[i][1]);
  }
  return result;
};