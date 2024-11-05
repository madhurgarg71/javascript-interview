function fetchWithAutoRetry(fetcher, maxRetryCount) {
  return new Promise((resolve, reject) => {
    let attempts = 0

    const attemptFetch = () => {
      fetcher()
        .then(resolve) // Resolve the promise if fetcher succeeds
        .catch((error) => {
          attempts++
          if (attempts <= maxRetryCount) {
            attemptFetch() // Retry fetcher
          } else {
            reject(error) // Reject after max retries
          }
        })
    }
    // NOTE: We are not recursing the fetchWithAutoRetry function here because
    //the would create a new Promise everytime it gets called and we'll lost the
    //referrence of the original Promise. By creating another function `attempFetch` we
    //are not modifying Promise referrence.

    attemptFetch() // Initial fetch attempt
  })
}

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve("Hello World")
      } else {
        reject("Failed")
      }
    }, 0)
  })
}

fetchWithAutoRetry(fetchData, 3)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.error(err)
  })
