/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  let parent = [];
  for (let i = 0; i < edges.length; i++) {
      parent.push(i);
  }
  let rank = new Array(edges.length).fill(1);
  var find = function(node) {
      let result = node;
      while (result !== parent[result]) {
          parent[result] = parent[parent[result]];
          result = parent[result];
      }
      return result;
  };
  for (let i = 0; i < edges.length; i++) {
      const parent1 = find(edges[i][0]);
      const parent2 = find(edges[i][1]);
      if (parent1 === parent2) {
          return edges[i];
      }
      if (rank[parent2] > rank[parent1]) {
          parent[parent1] = parent2;
          rank[parent2] += rank[parent1];
      } else {
          parent[parent2] = parent1;
          rank[parent1] += rank[parent2];
      }
  }
};