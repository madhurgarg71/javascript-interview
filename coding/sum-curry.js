function sum(n) {
  let ans = n
  const fn = function (x) {
    if (x === undefined) {
      return ans
    }
    ans += x
    return fn
  }
  return fn
}

console.log(sum(1)(2)(3)(4)())
