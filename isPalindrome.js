// i have used memory of O(n) to store the reverse string
//this can be optimized if we do in-place string reverse
function reverse(s) {
  const ans = []
  for (let i = s.length; i >= 0; i--) {
    ans.push(s[i])
  }

  return ans.join('')
}

function isPalindrome(str) {
  const removeSpecial = (str) => {
    str = str.replace(/\s/g, '')
    str = str.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    return str.toLowerCase()
  }

  const s = removeSpecial(str)
  return reverse(s) === s
}

console.log(isPalindrome('A man, a plan, a canal-Panama'))
console.log(isPalindrome('Foo Boo Foo'))
console.log(isPalindrome("Madam, I'm Adam")) // should be true
console.log(isPalindrome('123 321')) // should be true
