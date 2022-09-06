/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let stack = {};
  for (let i = 0; i < tickets.length; i++) {
      stack[tickets[i][0]] = stack[tickets[i][0]] || [];
      stack[tickets[i][0]].push(tickets[i][1]);
  }
  for (let key in stack) {
      stack[key].sort();
  }
  let result = [];
  let final = [];
  const help = function(city) {
      if (stack[city] && stack[city].length && !final.length) {
          for (let i = 0; i < stack[city].length; i++) {
              const temp = stack[city].splice(i, 1);
              result.push(temp[0]);
              help(temp[0]);
              result.pop();
              stack[city].splice(i, 0, temp[0]);
          }
      } else {
          if (result.length === tickets.length + 1 && !final.length) {
              final = result.slice();
          }
          return;
      }
  };
  result.push('JFK');
  help('JFK');
  return final;
};