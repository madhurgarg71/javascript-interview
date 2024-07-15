//input
const obj = {
  a: {
    b: {
      c: 2,
    },
  },
  d: {
    e: {
      f: 4,
    },
  },
}

//output
// {
//   'a_b_c': 2,
//   'd_e_f': 4

/**
 * The intuition behined solving this problem:
 * Keep generating the key (a_b_c) until we reach the leaf node (which is not an object)
 * For ex: const obj = {
 *    a: {
 *     b: {
 *      c: 2,
 *    },
 * }
 * For getting a_b_c, we need to have a_b_ generated first and then append c to it
 * Similarly for getting a_b, we need to have a_ generated first and then append b to it
 * And for getting a, we need to have '' generated first and then append a to it
 * So, we will start with an empty string and keep appending the keys to it
 * 1. '' + a
 * 2. a_ + b
 * 3. a_b_ + c
 * 4. a_b_c
 *
 * Left side of the '+' is the parent key which will keep on changing
 * as we append and right side is the current key coming from the object
 *
 * By the time we reach leaf node our current key will contain the final key (a_b_c)
 * and finally we will simply assign the non-object value to the final key
 */
function flattenKeys(obj) {
  const flattened = {}

  function flatten(obj, parentKey = '') {
    for (const key in obj) {
      const currentKey = `${parentKey}${key}`
      if (typeof obj[key] === 'object') {
        flatten(obj[key], `${currentKey}_`)
      } else {
        flattened[currentKey] = obj[key]
      }
    }
  }

  flatten(obj)

  return flattened
}

const flattenedObj = flattenKeys(obj)
console.log(flattenedObj)
