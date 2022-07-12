/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(...args) {
  // TODO: Your code here
  let func = args[0];
  let temp = args.slice(2);
  let inputthis = args[1];
  if (!inputthis) {
    return (...args) => func(...temp,...args);
  } else {
    inputthis.obj = func;
    return (...args) => inputthis.obj(...temp,...args);
  }
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(...args) {
  // TODO: Your code here
  if (!args[0]) {
    let array = args.slice(1);
    let temp = this;
    return (...args) => temp(...array, ...args);
  } else {
    let temp = args[0];
    temp.obj = this;
    return (...args) => temp.obj(...args);
  }
};
