const promiseAll = function (promises) {
  return new Promise(function (resolve, reject) {
    var errors = []
    var remaining = promises.length

    if (remaining === 0) {
      reject(errors)
    }

    function handleResult(value) {
      resolve(value)
    }

    function handleError(index, error) {
      errors[index] = error
      remaining--

      if (remaining === 0) {
        reject(errors)
      }
    }

    for (var i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(handleResult)
        .catch(handleError.bind(null, i))
    }
  })
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'one')
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 4000, 'two')
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 2000, 'three')
})

const ans = promiseAll([p1, p2, p3])
ans
  .then((data) => {
    console.log('All data fetched', data)
  })
  .catch((err) => {
    console.log('Error fetching data', err)
  })
