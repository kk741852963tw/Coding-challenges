/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  let second = slow.next;
  let prev = null;
  slow.next = null;
  while (second) {
      let next = second.next;
      second.next = prev;
      prev = second;
      second = next;
  }
  while (prev) {
      let stemp = head.next;
      let ftemp = prev.next;
      head.next = prev;
      prev.next = stemp;
      prev = ftemp;
      head = stemp;
  }
};