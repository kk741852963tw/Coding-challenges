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
 * @return {boolean}
 */
var isBalanced = function(root) {
  var result = true;
  var test = function(node, n) {
      if (!node) {
          return n - 1;
      }
      let left = test(node.left, n + 1);
      let right = test(node.right,n + 1);
      if (Math.abs(left - right) > 1) {
          result = false;
          return;
      }
      return Math.max(left, right);
  };
  test(root, 0);
  return result;
};