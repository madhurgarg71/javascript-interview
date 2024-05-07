function throttle(fn, LIMIT = 500) {
  let limitCrossed = true
  return function (...args) {
    if (limitCrossed) {
      fn.apply(this, args)
      limitCrossed = false
    } else {
      setTimeout(() => {
        limitCrossed = true
      }, LIMIT)
    }
  }
}
