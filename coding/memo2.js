function createKeyGenerator() {
  let count = 0
  const map = new Map()
  return function (input) {
    if (map.has(input)) return map.get(input)
    map.set(input, ++count)
    return count
  }
}

function memoize(fn) {
  const keyGenerator = createKeyGenerator()
  const cache = {}
  return function (...args) {
    const numbers = args.map(keyGenerator)
    const key = numbers.join(",")
    console.log("key", key)
    if (key in cache) {
      return cache[key]
    }
    cache[key] = res = fn.apply(this, args)
    return cache[key]
  }
}

const memo = memoize(function (a, b, c) {
  return { ...a, ...b, ...c }
})

// console.log(memo({}, {}, {}), callCount)
// console.log(memo({}, {}, {}), callCount)
