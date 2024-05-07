// Create a new web worker
const worker = new Worker('worker.js')

// Send a message to the worker
worker.postMessage('Hello from the main thread!')

// Receive messages from the worker
worker.onmessage = function (event) {
  console.log('Message received from worker:', event.data)
}

// Handle errors from the worker
worker.onerror = function (error) {
  console.error('Error occurred in worker:', error)
}
