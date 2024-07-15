Array.prototype.chop = function (size) {
  const res = []
  for (let i = 0; i < this.length; i += size) {
    const batch = this.slice(i, i + size)
    res.push(batch)
  }
  return res
}

function promisePool(functions, n) {
  const batches = functions.map((item) => item()).chop(n)
  return new Promise((resolve, reject) => {
    const promises = batches.map((batch) => {
      return new Promise((resolve, reject) => {
        Promise.all(batch).then((res) => resolve(res))
      })
    })
    Promise.all(promises)
      .then((res) => resolve(res))
      .catch(reject)
  })
}

promisePool(
  [
    () => new Promise((res) => setTimeout(res, 300)),
    () => new Promise((res) => setTimeout(res, 400)),
    () => new Promise((res) => setTimeout(res, 200)),
  ],
  2,
).then((res) => {
  console.log(res)
})
