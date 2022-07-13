/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.list = [];
  this.start = 0;
  this.final = 0;
  // add an item to the top of the stack
  this.push = function(value) {
    this.list[this.final] = value;
    this.final++;
  };

  // remove an item from the top of the stack
  this.pop = function(value) {
    if (value !== undefined) {
      this.start++;
      return this.list[this.start - 1];
    } else {
      this.final--;
      return this.list[this.final + 1];
    }
  };

  // return the number of items in the stack
  this.size = function() {
    return this.final - this.start;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value) {
    // TODO: implement `enqueue`
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
    let result = inbox.pop(-1);
    outbox.push(result);
    return result;
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    return inbox.size();
  };
};
