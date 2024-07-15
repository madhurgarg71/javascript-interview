import { asyncMap } from './async-map.mjs'

Array.prototype.chop = function (size) {
  const res = []
  for (let i = 0; i < this.length; i += size) {
    const batch = this.slice(i, i + size)
    res.push(batch)
  }

  return res
}

function asyncMapLimit(arr, limit, predicate) {
  const chopped = arr.chop(limit)
  const res = []

  return new Promise((resolve, reject) => {
    const promises = []
    chopped.forEach((arr) => {
      const p = new Promise((resolve, reject) => {
        asyncMap(arr, predicate).then((data) => {
          res.push(...data)
          resolve()
        }, reject)
      })
      promises.push(p)
    })

    Promise.all(promises)
      .then(() => resolve(res.flat(limit)))
      .catch(reject)
  })
}

const arr = [1, 2, 3]
asyncMapLimit(arr, 2, function (item, callback) {
  setTimeout(() => {
    const num = item * 2
    callback(null, num)
  }, 3000)
}).then((res) => {
  console.log('success', res)
})
