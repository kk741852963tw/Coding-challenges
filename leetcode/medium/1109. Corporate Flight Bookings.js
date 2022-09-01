/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  let result = new Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
      for (let j = bookings[i][0] - 1; j < bookings[i][1]; j++) {
          result[j] += bookings[i][2];
      }
  }
  return result;
};