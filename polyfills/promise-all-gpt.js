const promiseAll = function (promises) {
  return new Promise(function (resolve, reject) {
    var results = []
    var remaining = promises.length

    if (remaining === 0) {
      resolve(results)
    }

    function handleResult(index, value) {
      results[index] = value
      remaining--

      if (remaining === 0) {
        resolve(results)
      }
    }

    function handleError(error) {
      reject(error)
    }

    for (var i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(handleResult.bind(null, i))
        .catch(handleError)
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one')
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'two')
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'three')
})

const ans = promiseAll([p1, p2, p3])
ans
  .then((data) => {
    console.log('All data fetched', data)
  })
  .catch((err) => {
    console.log('Error fetching data', err)
  })
