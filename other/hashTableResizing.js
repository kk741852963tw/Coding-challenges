/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(k, v, check = true) {
    // TODO: implement `insert`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    storage[index] = [[k, v]];
    if (check) {
      this.resize();
    }
  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    if (storage[index]) {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          return storage[index][i][1];
        }
      }
    }
    return undefined;
  };

  result.remove = function(k) {
    // TODO: implement `remove`
    var index = getIndexBelowMaxForKey(k, storageLimit);
    if (storage[index].length > 1) {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === k) {
          storage[index][i] = undefined;
        }
      }
    }else if (storage[index] === undefined) {
      return undefined;
    } else {
      storage[index] = undefined;
    }
    this.resize();
  };

  result.resize = function() {
    var count = 0;
    var temp = [];
    var scope = this;
    for (var i = 0; i < storage.length; i++) {
      if (storage[i]) {
        for (var j = 0; j < storage[i].length; j++) {
          temp.push([storage[i][j][0], storage[i][j][1]]);
          count++;
        }
      }
    }
    if (count < storageLimit * 0.25 || count > storageLimit * 0.75) {
      if (count < storageLimit * 0.25) {
        storageLimit /= 2;
      } else {
        storageLimit *= 2;
      }
      storage = [];
      for (var i = 0; i < temp.length; i++) {
        scope.insert(temp[i][0], temp[i][1], false);
      }
    }
  }

  return result;
};
