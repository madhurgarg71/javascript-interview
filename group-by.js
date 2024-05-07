function groupBy(arr, appliedBy) {
  return arr.reduce((acc, item) => {
    const key =
      typeof appliedBy === 'function' ? appliedBy(item) : item[appliedBy]

    if (acc[key] === undefined) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(groupBy(['one', 'two', 'three'], 'length'))
