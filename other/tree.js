/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value) {
  //tree code goes here!
  const obj = Object.create(treeMaker.methods);
  obj.value = value || null;
  obj.children = [];
  return obj;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  this.children.push(treeMaker(value));
};

treeMaker.methods.contains = function(value) {
  let result = false;
  const help = function(input) {
    if (input.value === value) {
      result = true;
      return;
    }
    for (let i = 0; i < input.children.length; i++) {
      help(input.children[i]);
    }
  }
  help(this);
  return result;
};
