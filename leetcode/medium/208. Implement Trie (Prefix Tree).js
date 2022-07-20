
var Trie = function() {
  //this.list = [];
  this.list = {};
  this.end = false;
};

/**
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  //this.list.push(word);
  let curr = this;
  for (let i = 0; i < word.length; i++) {
      if (!curr.list[word[i]]) {
          curr.list[word[i]] = new Trie();
      }
      curr = curr.list[word[i]];
  }
  curr.end = true;
};

/**
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  //return this.list.includes(word);
  let curr = this;
  for (let i = 0; i < word.length; i++) {
      if (!curr.list[word[i]]) {
          return false;
      }
      curr = curr.list[word[i]];
  }
  return curr.end;
};

/**
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  // if (this.list.length === 0) {
  //     return false;
  // }
  // for (let i = 0; i < this.list.length; i++) {
  //     if (this.list[i].substring(0, prefix.length) === prefix) {
  //         return true;
  //     }
  // }
  // return false;
  let curr = this;
  for (let i = 0; i < prefix.length; i++) {
      if (!curr.list[prefix[i]]) {
          return false;
      }
      curr = curr.list[prefix[i]];
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/