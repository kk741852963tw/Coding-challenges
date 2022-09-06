/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  const adjacencyList = new Map();
  for (let i = 0; i < flights.length; i++) {
      if (adjacencyList.has(flights[i][0])) {
          adjacencyList.get(flights[i][0]).push([flights[i][1], flights[i][2]]);
      } else {
          adjacencyList.set(flights[i][0], [[flights[i][1], flights[i][2]]]);
      }
  }
  const queue = [[0, src, k+1]];
  const visited = new Map();
  while (queue.length) {
      queue.sort((a, b) => a[0] - b[0]);
      const [cost, city, stops] = queue.shift();
      visited.set(city, stops);
      if (city === dst) {
          return cost;
      }
      if (stops <= 0 || !adjacencyList.has(city)) {
          continue;
      }
      for (let i = 0; i < adjacencyList.get(city).length; i++) {
          if (visited.has(adjacencyList.get(city)[i][0]) && visited.get(adjacencyList.get(city)[i][0]) >= stops - 1) {
              continue;
          }
          queue.push([cost + adjacencyList.get(city)[i][1], adjacencyList.get(city)[i][0], stops - 1]);
      }
  }
  return -1;
};