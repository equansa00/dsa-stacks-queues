const Stack = require('../data_structures/stack');
/**
 * Reverse a string using a stack.
 * @param {string} s
 * @returns {string}
 */
function reverseString(s) {
  const stack = new Stack();
  for (const char of s) {
    stack.push(char);
  }
  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}

module.exports = reverseString;