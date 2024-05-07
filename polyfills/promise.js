/**
 * REQUIREMENTS
 * =============
 *
 * should be able to create promise by calling constructor
 * const p = new Promise((resolve, reject) => {...})
 *
 * should be able to apply .then()
 * p.then((res) => {})
 *
 * should be able to apply .catch()
 * p.catch((res) => {})
 *
 * should be able to chain promise
 * p.then(() => {}).then(() => {})
 */

const STATES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
}

class CustomPromise {
  constructor(executor) {
    this.state = STATES.PENDING
    this.value = undefined
    this.callbacks = []

    const resolve = (value) => {
      if (this.state === STATES.PENDING) {
        this.state = STATES.FULFILLED
        this.value = value
        //call all the fulfilled callbacks (.then callbacks)
        this.callbacks.forEach((cb) => cb.onFulfilled(value))
      }
    }

    const reject = (reason) => {
      if (this.state === STATES.PENDING) {
        this.state = STATES.REJECTED
        this.value = reason
        //call all the rejected callback (.catch callbacks)
        this.callbacks.forEach((cb) => cb.onRejected(reason))
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const callback = {
        onFulfilled: function (value) {
          try {
            if (typeof onFulfilled === 'function') {
              resolve(onFulfilled(value))
            } else {
              resolve(value)
            }
          } catch (e) {
            reject(e)
          }
        },
        onRejected: function (reason) {
          try {
            if (typeof onRejected === 'function') {
              reject(onRejected(reason))
            } else {
              reject(reason)
            }
          } catch (e) {
            reject(e)
          }
        },
      }
      if (this.state === STATES.PENDING) {
        this.callbacks.push(callback)
      } else if (this.state === STATES.FULFILLED) {
        onFulfilled(this.value)
      } else if (this.state === STATES.REJECTED) {
        onRejected(this.value)
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}

const p = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve({ message: 'hello world' })
    } else {
      reject({ error: 'Internal Error' })
    }
  }, 1000)
})
