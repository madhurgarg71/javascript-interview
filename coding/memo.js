function memo(fn) {
  let cache = {}
  const memoizedFn = function (...args) {
    const key = JSON.stringify(args)
    console.log(key)
    //why not use cache.hasOwnProperty(key)?
    if (key in cache) {
      return cache[key]
    }
    cache[key] = fn.apply(this, args)
    return cache[key]
  }

  const clear = function () {
    cache = {}
  }

  return { memoizedFn, clear }
}

let callCount = 0
const { memoizedFn, clear } = memo(function (a, b) {
  callCount++
  return { ...a, ...b }
})

console.log(memoizedFn({}, {}), callCount)
console.log(memoizedFn({}, {}), callCount)
