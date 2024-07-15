export function asyncMap(arr, predicate) {
  const res = []
  return new Promise((resolve, reject) => {
    const promises = []
    arr.forEach((item) => {
      const p = new Promise((resolve, reject) => {
        predicate(item, (err, data) => {
          if (err) reject(err)
          if (!err) res.push(data)
          resolve()
        })
      })
      promises.push(p)
    })

    Promise.all(promises)
      .then(() => resolve(res))
      .catch(reject)
  })
}

// const arr = [1, 2, 3]
// asyncMap(arr, function (item, callback) {
//   setTimeout(() => {
//     const num = item * 2
//     callback(null, num)
//   }, 3000)
// }).then((res) => {
//   console.log(res)
// })
