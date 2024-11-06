class LRUCache {
  constructor(capacity) {
    this.cache = new Map()
    this.capacity = capacity
  }

  get(key) {
    //update priority of this key as highest
    if (!this.cache.has(key)) {
      return -1
    }

    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }
    this.cache.set(key, value)
    console.log(this.cache)
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
