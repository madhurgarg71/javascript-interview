function createAsyncTask() {
  const value = Math.floor(Math.random() * 10)
  return function (callback) {
    setTimeout(() => {
      callback(value)
    }, value * 1000)
  }
}
function executeParallel(tasks, callback) {
  const res = []
  let remaining = tasks.length
  tasks.forEach((fn) => {
    fn((data) => {
      res.push(data)
      remaining--
      if (remaining === 0) {
        callback(res)
      }
    })
  })
  console.log('Im already done bro')
}

executeParallel(
  [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
  ],
  (res) => {
    console.log(res)
  },
)
