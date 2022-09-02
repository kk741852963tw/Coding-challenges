/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  // this.k = k;
  // this.array = nums.sort((a, b) => a - b);
  this.heap = new MinHeap(nums, k);
};

/**
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  // let left = 0;
  // let right = this.array.length - 1;
  // while (left <= right) {
  //     let mid = Math.floor((left + right) / 2);
  //     if (this.array[mid] < val) {
  //         left = mid + 1;
  //     } else {
  //         right = mid - 1;
  //     }
  // }
  // this.array.splice(left, 0 , val);
  // return this.array[this.array.length - this.k];
  this.heap.add(val);
  return this.heap.getMin();
};

var MinHeap = function(nums, size) {
  this.size = size;
  this.length = 0;
  this.heap = [];
  for (const num of nums) {
      this.add(num);
  }
};

MinHeap.prototype.add = function(num) {
  if (this.length < this.size) {
      this.length++;
      this.heap.push(num);
      this.siftUp(this.length - 1);
  } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.siftDown(0);
  }
};

MinHeap.prototype.getMin = function() {
  return this.heap[0];
};

MinHeap.prototype.siftDown = function(i) {
  const length = this.length;
  const heap = this.heap;
  let k = i * 2 + 1;
  while (k < length) {
      if (k + 1 < length && heap[k + 1] < heap[k]) {
          k++;
      }
      if (heap[i] <= heap[k]) {
          return;
      }
      [heap[i], heap[k]] = [heap[k], heap[i]];
      i = k;
      k = i * 2 + 1;
  }
};

MinHeap.prototype.siftUp = function(i) {
  const heap = this.heap;
  let p = Math.floor((i - 1) / 2);
  while (i > 0 && heap[i] < heap[p]) {
      [heap[i], heap[p]] = [heap[p], heap[i]];
      i = p;
      p = Math.floor((i - 1) / 2);
  }
};


/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/