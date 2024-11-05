/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const merged = []
  intervals.sort((a, b) => a[0] - b[0])
  let current = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    if (current[1] >= interval[0]) {
      current = [current[0], Math.max(current[1], interval[1])]
    } else {
      merged.push(current)
      current = intervals[i]
    }
  }

  merged.push(...intervals)
  return merged
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
])

merge([
  [2, 3],
  [2, 2],
  [3, 3],
  [1, 3],
  [5, 7],
  [2, 2],
  [4, 6],
])
