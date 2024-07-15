const obj1 = {
  a: 1,
  b: 2,
}

const obj2 = {
  a: 1,
  b: 2,
}

console.log(obj1 == obj2) //?
console.log(obj1 === obj2) //?

// deep compare objects (obviously not solves all the usecases)
function isEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)
  const hasEqualNoOfKeys = keys1.length === keys2.length

  if (!hasEqualNoOfKeys) {
    return false
  }

  let response = true

  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i]

    // check whether the key exist in obj2
    if (!obj2.hasOwnProperty(key)) {
      return false
    }

    //figure out the type of value
    const type1 = obj1[key] !== null ? typeof obj1[key] : 'null'
    const type2 = obj2[key] !== null ? typeof obj2[key] : 'null'

    // check whether the two values have same type
    if (type1 !== type2) {
      return false
    }

    // cases when the type is same
    if (type1 !== 'function' && type1 !== 'object') {
      if (obj1[key] !== obj2[key]) {
        response = false
      }
    }
    if (type1 === 'function') {
      if (obj1[key].toString() !== obj2[key].toString()) {
        response = false
      }
    }
    if (type1 === 'object') {
      response = isEqual(obj1[key], obj2[key])
    }
  }

  return response
}
