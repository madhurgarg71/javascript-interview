export default class WorkerPool {
  constructor(maxWorkers) {
    this.maxWorkers = maxWorkers;
    this.activeWorkers = 0;
    this.queue = [];
  }

  addTask(fn) {
    return new Promise((resolve, reject) => {
      this.queue.push({ fn, resolve, reject });
      this.processQueue();
    });
  }

  processQueue() {
    while (this.activeWorkers < this.maxWorkers && this.queue.length > 0) {
      const task = this.queue.shift();
      this.executeTask(task);
    }
  }

  executeTask(task) {
    // Simulate asynchronous task execution with a Promise
    const { fn, resolve, reject } = task;
    this.activeWorkers++;
    Promise.resolve(fn())
      .then((res) => {
        this.activeWorkers--;
        this.processQueue();
        resolve(res);
      })
      .catch((err) => {
        this.activeWorkers--;
        this.processQueue();
        reject(err);
      })
      .catch((err) => {
        reject(err);
      });
  }
}
