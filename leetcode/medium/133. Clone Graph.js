/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let obj = {};
  var test = function(node) {
      if (!node) {
          return node;
      }
      if (obj[node.val]) {
          return obj[node.val];
      }
      let temp = new Node(node.val)
      obj[node.val] = temp;
      for (let i = 0; i < node.neighbors.length; i++) {
          temp.neighbors.push(test(node.neighbors[i]));
      }
      return temp;
  }
  return test(node);
};