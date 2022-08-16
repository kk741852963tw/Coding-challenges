
var MinStack = function() {
  this.array = [];
  this.min = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.array.push(val);
  if (!this.min.length || val <= this.min[this.min.length - 1]) {
      this.min.push(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  //this.array.pop();
  const val = this.array.pop();
  if (val === this.min[this.min.length - 1]) {
      this.min.pop();
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.array[this.array.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  // var min = this.array[0];
  // for (let i = 1; i < this.array.length; i++) {
  //     if (this.array[i] < min) {
  //         min = this.array[i];
  //     }
  // }
  // return min;
  return this.min[this.min.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/