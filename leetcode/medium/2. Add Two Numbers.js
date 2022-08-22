/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // var temp1 = [];
  // while (l1 !== null) {
  //   temp1.push(l1);
  //   l1 = l1.next;
  // }
  // var temp2 = [];
  // while (l2 !== null) {
  //   temp2.push(l2);
  //   l2 = l2.next;
  // }
  // var digit = 0;
  // var i = 0;
  // var array = [];
  // var tempnode = new ListNode(0);
  // while (i < temp1.length || i < temp2.length) {
  //   if (temp1[i] === undefined) {
  //     temp1[i] = tempnode;
  //   }
  //   if (temp2[i] === undefined) {
  //     temp2[i] = tempnode;
  //   }
  //   if (digit === 0) {
  //     if (temp1[i].val + temp2[i].val > 9) {
  //       digit = 1;
  //       array.push(temp1[i].val + temp2[i].val - 10);
  //     } else {
  //       array.push(temp1[i].val + temp2[i].val);
  //     }
  //   } else {
  //     if (temp1[i].val + temp2[i].val > 8) {
  //       digit = 1;
  //       array.push(temp1[i].val + temp2[i].val - 10 + 1);
  //     } else {
  //       digit = 0;
  //       array.push(temp1[i].val + temp2[i].val + 1);
  //     }
  //   }
  //   i++;
  // }
  // if (digit === 1) {
  //   array.push(1);
  // }
  // var temp = new ListNode(array[0]);
  // var result = temp;
  // for (var i = 1; i < array.length; i++) {
  //   var node = new ListNode(array[i]);
  //   temp.next = node;
  //   temp = node;
  // }
  // return result;
    let temp1 = l1;
    let temp2 = l2;
    let dummy = new ListNode(0);
    let merged = dummy;
    let carry = 0;
    while (temp1 || temp2) {
        let sum = (temp1 ? temp1.val : 0) + (temp2 ? temp2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        merged.next = new ListNode(sum);
        merged = merged.next;
        if (temp1) temp1 = temp1.next;
        if (temp2) temp2 = temp2.next;
    }
    if (carry > 0) {
        merged.next = new ListNode(carry);
    }
    return dummy.next;
};