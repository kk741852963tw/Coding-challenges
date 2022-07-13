/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
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
  var storageLimit = 1000;
  result.insert = function(k, v) {
    // TODO: implement `insert()`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (!result[index]) {
      result[index] = [[k, v]];
    } else {
      for (let i = 0; i < result[index].length; i++) {
        if (result[index][i][0] === k) {
          result[index][i][1] = v;
          return;
        }
      }
      result[index].push([k, v]);
    }
  };

  result.retrieve = function(k) {
    // TODO: implement `retrieve()`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (!result[index]) {
      return undefined;
    }
    for (let i = 0; i < result[index].length; i++) {
      if (!result[index][i]) {
        continue;
      }
      if (result[index][i][0] === k) {
        return result[index][i][1];
      }
    }
    return undefined;
  };

  result.remove = function(k) {
    // TODO: implement `remove()`
    var index = getIndexBelowMaxForKey(k, this.storageLimit);
    if (!result[index]) {
      return;
    }
    for (let i = 0; i < result[index].length; i++) {
      if (result[index][i][0] === k) {
        result[index][i] = undefined;
      }
    }
  };

  return result;
};
