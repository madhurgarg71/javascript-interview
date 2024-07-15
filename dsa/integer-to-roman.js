/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const ROMAN_MAP = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }

  const values = Object.keys(ROMAN_MAP).map((item) => Number(item))

  let ans = ''
  let digit
  let i = 0
  let decimalNum
  let digits = []

  while (num > 0) {
    digit = num % 10
    num = Math.floor(num / 10)
    decimalNum = digit * Math.pow(10, i)
    digits.unshift(decimalNum)
    i++
  }

  const getMaximalVal = (digit) => {
    for (let i = values.length - 1; i >= 0; i--) {
      if (digit >= values[i]) {
        return values[i]
      }
    }
  }

  const getSymbol = (digit, maximalVal) => {
    switch (digit) {
      case 4:
        return 'IV'
      case 40:
        return 'XL'
      case 400:
        return 'CD'
      case 9:
        return 'IX'
      case 90:
        return 'XC'
      case 900:
        return 'CM'
      default:
        return ROMAN_MAP[maximalVal]
    }
  }

  for (let i = 0; i < digits.length; i++) {
    let item = digits[i]
    while (item > 0) {
      const maximalVal = getMaximalVal(item)
      const symbol = getSymbol(item, maximalVal)
      ans += symbol
      if ([4, 40, 400, 9, 90, 900].includes(item)) {
        item = 0
      } else {
        item -= maximalVal
      }
    }
    console.log(ans)
  }

  return ans
}
