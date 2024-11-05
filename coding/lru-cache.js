class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  evict(key) {
    this.cache.forEach((v, k, m) => {
      if (k !== key) {
        this.cache.set(k, {
          value: v.value,
          priority: v.priority - 1,
        })
      }
    })

    if (this.cache.size > this.capacity) {
      const leastPriorityPair = Array.from(this.cache).sort(
        (a, b) => a[1].priority - b[1].priority,
      )[0]
      // console.log("leastPriorityPair", leastPriorityPair[0])
      this.cache.delete(leastPriorityPair[0])
    }
  }

  get(key) {
    //update priority of this key as highest
    if (!this.cache.has(key)) {
      return -1
    }
    const { value } = this.cache.get(key)
    this.cache.set(key, {
      value,
      priority: this.capacity,
    })
    this.evict(key)
    // console.log("cache", this.cache)
    return this.cache.get(key)
  }

  put(key, value) {
    this.cache.set(key, {
      value,
      priority: this.capacity,
    })
    this.evict(key)
    console.log("cache", this.cache)
  }
}

const lRUCache = new LRUCache(2)
lRUCache.put(1, 1) // cache is {1=1}
lRUCache.put(2, 2) // cache is {1=1, 2=2}
lRUCache.get(1) // return 1
lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2) // returns -1 (not found)
lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1) // return -1 (not found)
lRUCache.get(3) // return 3
lRUCache.get(4) // return 4
