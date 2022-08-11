
var MedianFinder = function() {
  this.array = [];
  // this.low = [];
  // this.lowMax = -Infinity;
  // this.high = [];
  // this.highMin = Infinity;
};

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (this.array.length === 0) {
      this.array.push(num);
  } else if (num <= this.array[0]) {
      this.array.unshift(num);
  } else if (num >= this.array[this.array.length - 1]) {
      this.array.push(num);
  } else {
      for (let i = 0; i < this.array.length - 1; i++) {
          if (num > this.array[i] && num <= this.array[i + 1]) {
              this.array.splice(i + 1, 0, num);
              return;
          }
      }
  }
  // if (num < this.highMin) {
  //     this.low.push(num);
  // } else {
  //     this.high.push(num);
  // }
  // if (this.low.length > this.high.length) {
  //     if (num > this.lowMax) {
  //         this.low.pop();
  //         this.high.push(num);
  //         if (this.highMin > num) {
  //             this.highMin = num;
  //         }
  //     } else {
  //         let temp = this.low[this.low.indexOf(this.lowMax)];
  //         this.low.splice(this.low.indexOf(this.lowMax), 1);
  //         this.high.push(temp);
  //         if (this.highMin > temp) {
  //             this.highMin = temp;
  //         }
  //         this.low.sort(function(a, b) {
  //           return a - b;
  //         });
  //         this.lowMax = this.low[this.low.length - 1];
  //     }
  // } else {
  //     if (this.lowMax < num) {
  //         this.lowMax = num;
  //     }
  // }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.array.length % 2 === 1) {
      return this.array[Math.floor(this.array.length / 2)];
  } else {
      return (this.array[this.array.length / 2] + this.array[this.array.length / 2 - 1]) / 2;
  }
  // if (this.high.length === 0) {
  //     return this.lowMax;
  // }
  // if (this.low.length === 0) {
  //     return this.highMin;
  // }
  // if (this.high.length > this.low.length) {
  //     return this.lowMax;
  // }
  // return (this.lowMax + this.highMin) / 2;
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/