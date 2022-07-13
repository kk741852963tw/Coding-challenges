/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  //fill me in!
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  let node = this.makeNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else if (!this.head.next) {
    this.head.next = node;
    this.tail = this.head.next;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  var result = this.head.value;
  if (!this.head.next) {
    this.head = this.head.next;
    this.tail = this.head;
  } else {
    this.head = this.head.next;
  }
  return result;
};

LinkedList.prototype.contains = function(value) {
  var temp = this.head;
  while (temp) {
    if (temp.value === value) {
      return true;
    }
    temp = temp.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  let node = {
    value: value,
    next: null
  };
  return node;
};
