class CustomPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.callbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.callbacks.forEach((callback) => {
          globalThis.queueMicrotask(() => callback.onFulfilled(value))
        })
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.value = reason
        this.callbacks.forEach((callback) => {
          globalThis.queueMicrotask(() => callback.onRejected(reason))
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const callback = {
        onFulfilled: (value) => {
          try {
            if (typeof onFulfilled === 'function') {
              resolve(onFulfilled(value))
            } else {
              resolve(value)
            }
          } catch (error) {
            reject(error)
          }
        },
        onRejected: (reason) => {
          try {
            if (typeof onRejected === 'function') {
              resolve(onRejected(reason))
            } else {
              reject(reason)
            }
          } catch (error) {
            reject(error)
          }
        },
      }

      if (this.state === 'pending') {
        this.callbacks.push(callback)
      } else if (this.state === 'fulfilled') {
        globalThis.queueMicrotask(() => callback.onFulfilled(this.value))
      } else if (this.state === 'rejected') {
        globalThis.queueMicrotask(() => callback.onRejected(this.value))
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}

const p = new CustomPromise((resolve, reject) => {
  setTimeout(reject, 1000, 'hello')
})

p.then(() => {
  console.log(p.state)
})
