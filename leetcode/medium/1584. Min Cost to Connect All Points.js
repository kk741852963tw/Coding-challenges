/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let n = points.length;
  let mstCost = 0;
  let edgesUsed = 0;
  let inMST = new Array(n).fill(false);
  let minDist = new Array(n).fill(Infinity);
  minDist[0] = 0;
  while (edgesUsed < n) {
      let currMinEdge = Infinity;
      let currNode = -1;
      for (let node = 0; node < n; node++) {
          if (!inMST[node] && currMinEdge > minDist[node]) {
              currMinEdge = minDist[node];
              currNode = node;
          }
      }
      mstCost += currMinEdge;
      edgesUsed++;
      inMST[currNode] = true;
      for (let nextNode = 0; nextNode < n; nextNode++) {
          let weight = Math.abs(points[currNode][0] - points[nextNode][0]) +
                       Math.abs(points[currNode][1] - points[nextNode][1]);
          if (!inMST[nextNode] && minDist[nextNode] > weight) {
              minDist[nextNode] = weight;
          }
      }
  }
  return mstCost;
};