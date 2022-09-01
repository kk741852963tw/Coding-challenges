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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  var result = -Infinity;
  var test = function(node) {
      if (!node) {
          return -1;
      }
      let left = test(node.left);
      let right = test(node.right);
      result = Math.max(result, 2 + left + right);
      return 1 + Math.max(left, right);
  };
  test(root);
  return result;
};