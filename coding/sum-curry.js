function sum(n) {
  let ans = n
  const fn = function (x) {
    //if no argument is passed return the answer
    if (x === undefined) {
      return ans
    }
    //or else store the current ans and return the function
    ans += x
    return fn
  }
  return fn
}

console.log(sum(1)(2)(3)(4)())
