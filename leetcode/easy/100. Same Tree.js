/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  var check = true;
  var test = function(root1, root2) {
      if (!root1 && !root2) {
          return;
      }
      if (!root1 || !root2) {
          check = false;
          return;
      }
      if (root1.val !== root2.val) {
          check = false;
          return;
      }
      test(root1.left, root2.left);
      test(root1.right, root2.right);
  };
  test(p, q);
  return check;
};