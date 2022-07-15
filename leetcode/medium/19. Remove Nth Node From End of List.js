/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // let array = [];
  // while (head) {
  //     array.push(head.val);
  //     head = head.next;
  // }
  // let node = new ListNode(0);
  // let prev = node;
  // for (let i = 0; i < array.length; i++) {
  //     if (i + n !== array.length) {
  //         node.next = new ListNode(array[i]);
  //         node = node.next;
  //     }
  // }
  // return prev.next;
  let left = head;
  let right = head;
  while (n !== 0) {
      right = right.next;
      n--;
  }
  if (!right) {
      return head.next;
  }
  while (right.next) {
      left = left.next;
      right = right.next;
  }
  left.next = left.next.next;
  return head;
};