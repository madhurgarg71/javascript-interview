// Given a string s consisting of lowercase English letters. Perform the following operation:

// Select any non-empty substring then replace every letter of the substring with the preceding letter of the English alphabet. For example, 'b' is converted to 'a', and 'a' is converted to 'z'.

// Return the lexicographically smallest string after performing the operation.

/**
 * @param {string} s
 * @return {string}
 */

function getPrecedingCharacter(char) {
  return String.fromCharCode(char.charCodeAt(0) - 1)
}
var smallestString = function (s) {
  let i = 0
  let n = s.length
  s = s.split("")
  while (i < s.length && s[i] === "a") i++

  if (i === n) {
    s[n - 1] = "z"
  } else {
  }

  while (i < s.length && s[i] !== "a") {
    s[i] = getPrecedingCharacter(s[i])
    i++
  }

  return s.join("")
}
