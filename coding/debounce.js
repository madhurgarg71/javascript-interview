function debounce(fn, DELAY = 500) {
  let runningTicker
  return function (...args) {
    if (runningTicker) {
      clearTimeout(runningTicker)
    }
    runningTicker = setTimeout(() => {
      fn.apply(this, args)
    }, DELAY)
  }
}

function makeAPICall() {
  console.log('calling api...')
}

const debouncedFn = debounce(makeAPICall, 1000)
