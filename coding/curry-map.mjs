import { curry } from '../polyfills/curry.mjs'

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }]
const get = (prop, obj) => obj[prop]
const getCurried = curry(get)
const cb = getCurried('id')
console.log(objects.map(cb))
