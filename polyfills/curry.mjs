export const curry = (fn) => {
  let curried = (...args) => {
    console.log('out', args.length, fn.length)
    if (args.length < fn.length) {
      return curried.bind(null, ...args)
    }
    return fn(...args)
  }
  return curried
}

const total = (x, y, z) => x + y + z
const curriedTotal = curry(total)

// console.log(curriedTotal(1)(2)(3))
