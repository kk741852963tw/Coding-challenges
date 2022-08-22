/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  oldToCopy = new Map();
  oldToCopy.set(null, null);
  let cur = head;
  while (cur) {
      const copy = new Node(cur.val);
      oldToCopy.set(cur, copy);
      cur = cur.next;
  }
  cur = head;
  while (cur) {
      const copy = oldToCopy.get(cur);
      copy.next = oldToCopy.get(cur.next);
      copy.random = oldToCopy.get(cur.random);
      cur = cur.next;
  }
  return oldToCopy.get(head);
};