Promise._race = function (promises) {
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
