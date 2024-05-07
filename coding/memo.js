function memo(fn) {
  const cache = {}
  return function (...args) {
    const key = args.join('-')
    if (cache[key]) {
      return cache[key]
    }
    cache[key] = fn.apply(this, args)
    return cache[key]
  }
}

function sum(a, b, c) {
  return a + b + c
}

const memoizedSum = memo(sum)
console.log(memoizedSum(1, 2, 3))
