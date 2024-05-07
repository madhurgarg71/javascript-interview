function parseQuery(path, obj, defaultVal) {
  const keys = path.split('.')
  let result = obj
  for (let i = 0; i < keys.length; i++) {
    if (
      typeof result !== 'object' ||
      result === null ||
      result[keys[i]] === undefined
    ) {
      return defaultVal
    }
    result = result[keys[i]]
  }
  return result
}

const obj = {
  a: {
    b: {
      c: null,
    },
  },
}

console.log(parseQuery('a.b.c.d', obj, 'default'))

// function deepFind(obj, path) {
//   var paths = path.split('.'),
//     current = obj,
//     i

//   for (i = 0; i < paths.length; ++i) {
//     if (current[paths[i]] == undefined) {
//       return undefined
//     } else {
//       current = current[paths[i]]
//     }
//   }
//   return current
// }

// console.log(
//   deepFind(
//     {
//       foo: { bar: null },
//     },
//     'foo.bar.z',
//   ),
// )
