
var TimeMap = function() {
  this.object = {};
};

/**
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.object[key]) {
      this.object[key] = [];
  }
  this.object[key].push([value, timestamp]);
};

/**
* @param {string} key
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
  if (!this.object[key]) {
      return '';
  }
  let result = '';
  let left = 0;
  let right = this.object[key].length - 1;
  // while (left <= right) {
  //     const mid = Math.floor((left + right) / 2);
  //     if (this.object[key][mid][1] > timestamp) {
  //         right = mid - 1;
  //     } else {
  //         left = mid + 1;
  //         result = this.object[key][mid][0];
  //     }
  // }
  // return result;
  while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.object[key][mid][1] > timestamp) {
          right = mid;
      } else {
          left = mid + 1;
          result = this.object[key][mid][0];
      }
  }
  return this.object[key][left][1] <= timestamp ? this.object[key][left][0] : result;
};

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/