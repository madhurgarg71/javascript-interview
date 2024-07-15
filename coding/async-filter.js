function filter(arr, predicate) {
  return new Promise((resolve, reject) => {
    const res = []
    const promises = arr.map((item) => {
      return new Promise((resolve, reject) => {
        predicate(item, (err, data) => {
          if (err) reject(err)
          if (!err && data) res.push(item)
          resolve()
        })
      })
    })
    Promise.all(promises)
      .then(() => resolve(res))
      .catch(reject)
  })
}

let numPromise = filter([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num = num * 2

    // throw error
    if (num === 7) {
      callback(true)
    } else {
      callback(null, num !== 4)
    }
  }, 2000)
})

numPromise
  .then((result) => console.log('success:', result))
  .catch(() => console.log('no success'))
