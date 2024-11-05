/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0
  let currentMin = prices[0]

  for (let price of prices) {
    if (price < currentMin) {
      currentMin = prices[i]
    }

    let profit = price - currentMin
    max = Math.max(max, profit)
  }

  return max
}
