/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var result = [];
  var test = function(node, n) {
      if (!node) {
          return;
      }
      if (!result[n]) {
          result[n] = [];
      }
      result[n].push(node.val);
      test(node.left, n + 1);
      test(node.right, n + 1);
  }
  test(root, 0);
  return result;
};