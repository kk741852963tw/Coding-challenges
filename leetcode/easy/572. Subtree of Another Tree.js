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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  var test = function(s, t) {
      if (!s && !t) {
          return true;
      }
      if (!s || !t) {
          return false;
      }
      if (s.val === t.val) {
          return test(s.left, t.left) && test(s.right, t.right);
      } else {
          return false;
      }
  };
  if (!subRoot) {
      return true;
  }
  if (!root) {
      return false;
  }
  if (test(root, subRoot)) {
      return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};