const promiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    const res = []
    let count = 0
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((data) => {
          res.push(data)
          count++
          if (count === promises.length) {
            resolve(res)
          }
        })
        .catch((err) => reject(err))
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one')
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two')
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, 'three')
})

const ans = promiseAll([p1, p2, p3.catch((err) => err)])
ans
  .then((data) => {
    console.log('All data fetched', data)
  })
  .catch((err) => {
    console.log('Error fetching data', err)
  })
