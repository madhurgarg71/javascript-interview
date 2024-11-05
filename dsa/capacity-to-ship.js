function isDeliverable(weights, days, capacity) {
  let sum = 0
  let daysUsed = 1

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (sum > capacity) {
      daysUsed++
      sum = weights[i]
    }

    if (daysUsed > days) {
      return false
    }
  }
  return true
}

function shipWithinDays(weights, days) {
  let start = Math.max(...weights)
  let end = weights.reduce((a, b) => a + b)
  let ans

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isDeliverable(weights, days, mid)) {
      ans = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return ans
}

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const days = 5

console.log(shipWithinDays(weights, days))
