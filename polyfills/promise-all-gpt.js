if (!Promise.all) {
  Promise.all = function (promises) {
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
}
