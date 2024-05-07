const myWorker = new Worker('worker.js')

function performLongTask() {
  for (let i = 0; i < 1000000000; i++) {
    console.log('blocking...')
  }
}

document.querySelector('#blocking').addEventListener('click', () => {
  performLongTask()
})

document.querySelector('#non-blocking').addEventListener('click', () => {
  myWorker.postMessage('start')
  myWorker.onmessage = (event) => {
    console.log(event.data)
  }
})
