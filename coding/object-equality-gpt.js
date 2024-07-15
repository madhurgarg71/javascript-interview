function areObjectsDeepEqual(obj1, obj2) {
  // Check if both are objects
  if (
    typeof obj1 === 'object' &&
    obj1 !== null &&
    typeof obj2 === 'object' &&
    obj2 !== null
  ) {
    // Get the keys of both objects
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false
    }

    // Check if the values of each key are equal
    for (let key of keys1) {
      if (!keys2.includes(key) || !areObjectsDeepEqual(obj1[key], obj2[key])) {
        return false
      }
    }

    // If all checks pass, the objects are deeply equal
    return true
  } else {
    // If not objects or null, check for strict equality
    return obj1 === obj2
  }
}
