/**
 *
 * @param {Array<Promise>} promises
 * @returns
 */
const promiseAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    let results = []
    let remaining = promises.length

    const handleSettlement = (index, status, value) => {
      results[index] = {
        value,
        status,
      }
      remaining--
      if (remaining === 0) {
        resolve(results)
      }
    }

    promises.forEach((promise, index) => {
      promise
        .then(handleSettlement.bind(null, index, 'fulfilled'))
        .catch(handleSettlement.bind(null, index, 'rejected'))
    })
  })
}

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
)
const promises = [promise1, promise2]

promiseAllSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
)
