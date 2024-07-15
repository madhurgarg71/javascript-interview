function memo(fn) {
  const cache = {}
  return function (...args) {
    const key = JSON.stringify(args)
    console.log('key', key)
    //why not use cache.hasOwnProperty(key)?
    if (key in cache) {
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
