Array.prototype._flat = function (depth = 1) {
  if (depth === 0) return this.slice()
  return this.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item._flat(depth - 1)]
    } else {
      return [...acc, item]
    }
  }, [])
}

const arr = [[1, 2, [3, 4]]]
console.log(arr._flat(2))
