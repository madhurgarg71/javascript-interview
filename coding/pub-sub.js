//pubsub

class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(topic, subscriber) {
    if (this.subscribers[topic]) {
      this.subscribers[topic].push(subscriber)
    } else {
      this.subscribers[topic] = [subscriber]
    }
  }

  unsubscribe(topic, subscriber) {
    this.subscribers[topic] = this.subscribers[topic].filter(
      (sub) => sub !== subscriber,
    )
  }

  publish(topic, payload) {
    console.log('Publishing ', topic, payload)
    if (this.subscribers[topic]) {
      this.subscribers[topic].forEach((sub) => sub(payload))
    }
  }
}

const pubsubInstance = new PubSub()

// producer
class Producer {
  constructor() {}

  send(topic, payload) {
    pubsubInstance.publish(topic, payload)
  }
}

class Consumer {
  constructor() {}

  subscribe(topic, callback) {
    pubsubInstance.subscribe(topic, callback)
  }
}

const producer = new Producer()
const consumer = new Consumer()
consumer.subscribe('chat', (msg) => {
  console.log('msg : ', msg)
})

producer.send('chat', { message: 'hi' })

// consumer
