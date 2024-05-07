function performLongTask() {
  for (let i = 0; i < 1000000000; i++) {
    postMessage('blocking...')
  }
}

self.onmessage = (event) => {
  console.log(event.data)
  switch (event.data) {
    case 'start':
      performLongTask()
      break
  }
}
