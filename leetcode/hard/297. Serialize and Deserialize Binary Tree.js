/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var array = [];
  var test = function(node) {
      if (!node) {
          array.push("N");
          return;
      }
      array.push(node.val);
      test(node.left);
      test(node.right);
  };
  test(root);
  return array.join(',');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  var array = data.split(',');
  var n = 0;
  var test = function() {
      if (array[n] === 'N') {
          n++;
          return null;
      }
      let node = new TreeNode(array[n]);
      n++;
      node.left = test();
      node.right = test();
      return node;
  };
  return test();
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/