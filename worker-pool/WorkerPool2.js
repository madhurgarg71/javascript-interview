export default class WorkerPool {
  // Constructor takes the maximum number of workers that can be active at once
  constructor(maxWorkers) {
    this.maxWorkers = maxWorkers // Maximum number of active workers
    this.activeWorkers = 0 // Current number of active workers
    this.queue = [] // Queue to hold tasks that are waiting to be executed
  }

  // Method to add a task to the worker pool
  addTask(task) {
    // Return a new Promise that resolves when the task is completed
    return new Promise((resolve, reject) => {
      // If the number of active workers is less than the maximum
      if (this.activeWorkers < this.maxWorkers) {
        this.activeWorkers++ // Increment the number of active workers
        this.executeTask(task, resolve, reject) // Execute the task
      } else {
        // If the maximum number of active workers has been reached, add the task to the queue
        this.queue.push({ task, resolve, reject })
      }
    })
  }

  // Method to execute a task
  executeTask(task, resolve, reject) {
    // Simulate asynchronous task execution with a Promise
    Promise.resolve(task())
      .then((result) => {
        resolve(result) // Resolve the Promise with the result of the task
        this.activeWorkers-- // Decrement the number of active workers
        // If there are any tasks in the queue
        if (this.queue.length > 0) {
          // Remove the next task from the queue and execute it
          const nextTask = this.queue.shift()
          this.addTask(nextTask.task)
            .then(nextTask.resolve) // Resolve the Promise with the result of the task
            .catch(nextTask.reject) // Reject the Promise if an error occurs
        }
      })
      .catch(reject) // Reject the Promise if an error occurs
  }
}
