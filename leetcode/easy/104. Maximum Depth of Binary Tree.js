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
var maxDepth = function(root) {
  if (!root) {
      return 0;
  }
  var depth = 1;
  var test = function(root, n) {
      if (!root) {
          return;
      }
      if (depth < n) {
          depth = n;
      }
      root.left = test(root.left, n + 1);
      root.right = test(root.right, n + 1);
  };
  test(root, 1);
  return depth;
};