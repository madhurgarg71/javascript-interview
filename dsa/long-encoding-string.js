function frequency(s) {
  /**
   * base cases
   * ''
   * '1'
   */

  if (s.length === 0) return []
  if (s.length === 1) return [1]

  /**
   * other cases
   * '1(2)'
   * '10#'
   * '10#(2)'
   */

  let i = 0
  let out = new Array(26).fill(0)
  let stack = []

  const parseBracketNum = (s, i) => {
    let str = ''
    while (s[i] !== ')') {
      str = str.concat(s[i])
      i++
    }
    return [Number(str), i + 1]
  }

  const put = (char, count) => {
    out[Number(char) - 1] += count
  }

  const isNumber = (char) => {
    return char !== '(' && char !== '#' && char !== ')'
  }

  const processHash = (count) => {
    const [second, first] = [stack.pop(), stack.pop()]
    put(first + second, count)
  }

  const processNumber = (count) => {
    while (stack.length > 0) {
      const top = stack.pop()
      put(top, count)
    }
  }

  while (i < s.length) {
    const ele = s[i]
    if (isNumber(ele)) {
      stack.push(ele)
    } else if (ele === '(') {
      if (s[i - 1] === '#') {
        const [count, index] = parseBracketNum(s, i + 1)
        i = index
        processHash(count)
        processNumber()
        continue
      } else {
        const [count, index] = parseBracketNum(s, i + 1)
        i = index

        processNumber(count)
        continue
      }
    } else if (ele === '#') {
      processHash(1)
    }
    i++
  }

  return out
}

function decodeString(m) {
  const res = m.reduce((acc, count, index) => {
    let char = String.fromCharCode(index + 97)
    return acc.concat(char.repeat(count))
  }, '')

  return res
}

// console.log(frequency('1226#24#'))
console.log(frequency('1(2)23(3)'))
// console.log(frequency('2110#(2)'))
// console.log(frequency('23#(2)24#25#26#23#(3)'))
