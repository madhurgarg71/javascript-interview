var throttle = function (fn, t) {
  let shouldWait = false
  let waitingArgs
  const timeoutFunc = function () {
    console.log(waitingArgs)
    if (waitingArgs === null) {
      shouldWait = false
    } else {
      fn(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, t)
    }
  }

  return function (...args) {
    console.log(...args)
    if (shouldWait) {
      waitingArgs = args
      return
    }

    fn(...args)
    shouldWait = true
    setTimeout(timeoutFunc, t)
  }
}
