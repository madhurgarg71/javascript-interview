const person = {
  name: 'Krishna',
  age: 30,
}

function printName(x, y) {
  console.log('Person name is ' + this.name + x + y)
}

Function.prototype._bind = function (obj, ...args1) {
  const fn = this
  return function (...args2) {
    fn.apply(obj, [...args1, ...args2])
  }
}

const bindedFn = printName._bind(person, 'gwalior')
bindedFn('morar')
