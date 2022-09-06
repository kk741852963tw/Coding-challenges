/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
  let time_taken = 0;
  const visited_set = new Set();
  const min_heap = new MinPriorityQueue();
  const node_edge_cost = new Map();
  for (let i = 0; i < times.length; i++) {
      let edges = [];
      if (node_edge_cost.has(times[i][0])) {
          edges = node_edge_cost.get(times[i][0]);
      }
      edges.push([times[i][1], times[i][2]]); //destination and cost
      node_edge_cost.set(times[i][0], edges); //source and its node
  }
  min_heap.enqueue([k, 0], 0);
  while (min_heap.size()) {
      const temp = min_heap.dequeue().element;
      if (visited_set.has(temp[0])) {
          continue;
      }
      visited_set.add(temp[0]);
      time_taken = Math.max(temp[1], time_taken);
      const node_edges = node_edge_cost.get(temp[0]) || [];
      for (let i = 0; i < node_edges.length; i++) {
          if (!visited_set.has(node_edges[i][0])) {
            min_heap.enqueue([node_edges[i][0], node_edges[i][1] + temp[1]], node_edges[i][1] + temp[1]);
          }
      }
  }
  return visited_set.size === n ? time_taken : -1;
};